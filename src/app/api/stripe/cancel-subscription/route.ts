import { NextResponse, NextRequest } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  // Authenticate user via access token
  const authHeader = req.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const token = authHeader.split(' ')[1];
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { global: { headers: { Authorization: `Bearer ${token}` } } }
  );
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Get user's subscription ID from user_plans
  const { data: plan, error } = await supabase
    .from('user_plans')
    .select('stripe_subscription_id')
    .eq('user_id', user.id)
    .eq('status', 'active')
    .single();
  if (error || !plan?.stripe_subscription_id) {
    return NextResponse.json({ error: 'No active subscription found.' }, { status: 400 });
  }

  // Cancel the subscription at period end or just fetch status
  try {
    let subscription = await stripe.subscriptions.retrieve(plan.stripe_subscription_id);
    if (req.nextUrl.searchParams.get('cancel') === 'true' && !subscription.cancel_at_period_end) {
      subscription = await stripe.subscriptions.update(plan.stripe_subscription_id, {
        cancel_at_period_end: true,
      });
    }
    return NextResponse.json({
      canceled: subscription.cancel_at_period_end,
      cancel_at_period_end: subscription.cancel_at_period_end,
      current_period_end: subscription.current_period_end ? new Date(subscription.current_period_end * 1000).toISOString() : null,
      status: subscription.status,
    });
  } catch (err) {
    return NextResponse.json({ error: 'Stripe error: ' + (err instanceof Error ? err.message : 'Unknown') }, { status: 500 });
  }
} 