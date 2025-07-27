import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  const sig = req.headers.get('stripe-signature');
  const buf = await req.arrayBuffer();
  let event;

  try {
    event = stripe.webhooks.constructEvent(Buffer.from(buf), sig!, endpointSecret);
  } catch (err) {
    return NextResponse.json({ error: `Webhook Error: ${err instanceof Error ? err.message : 'Unknown error'}` }, { status: 400 });
  }

  // Handle event types
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const userId = session.metadata?.user_id;
    const subscriptionId = session.subscription as string;
    const priceId = process.env.STRIPE_PRICE_ID;

    console.log('Webhook: checkout.session.completed', { userId, subscriptionId, priceId, metadata: session.metadata });

    if (userId) {
      const { data, error } = await supabaseAdmin.from('user_plans').upsert({
        user_id: userId,
        plan_type: 'premium',
        status: 'active',
        stripe_subscription_id: subscriptionId,
        stripe_price_id: priceId,
        end_date: null,
      }, { onConflict: 'user_id' });
      console.log('Webhook upsert result:', { data, error });
      if (error) {
        console.error('Webhook upsert error:', error);
      }
    } else {
      console.error('Webhook: No userId in session metadata', { metadata: session.metadata });
    }
  }

  if (event.type === 'customer.subscription.deleted' || event.type === 'customer.subscription.updated') {
    const subscription = event.data.object as Stripe.Subscription;
    const { data: userPlan } = await supabaseAdmin
      .from('user_plans')
      .select('user_id')
      .eq('stripe_subscription_id', subscription.id)
      .single();
    if (userPlan?.user_id) {
      let updateFields: any = {};
      if (event.type === 'customer.subscription.deleted' || (event.type === 'customer.subscription.updated' && subscription.cancel_at_period_end)) {
        updateFields = {
          plan_type: 'free',
          status: 'inactive',
          stripe_subscription_id: null,
          stripe_price_id: null,
          end_date: subscription.current_period_end
            ? new Date(subscription.current_period_end * 1000).toISOString()
            : null,
        };
      }
      const { data, error } = await supabaseAdmin.from('user_plans').update(updateFields).eq('user_id', userPlan.user_id);
      console.log('Webhook update result:', { data, error });
      if (error) {
        console.error('Webhook update error:', error);
      }
    }
  }

  return NextResponse.json({ received: true });
} 