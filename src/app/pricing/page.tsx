'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Design from '../components/Design';
import Footer from '../components/Footer';
import { useAuthNavigation } from '@/hooks/useAuthNavigation';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

const plans = [
  {
    name: 'Plan Gratuit',
    price: '0',
    period: 'lunar',
    features: [
      'Acces la resurse de bază',
      'Exerciții practice limitate',
      'Suport prin email'
    ],
    buttonText: 'Cont gratuit',
    popular: false,
    planType: 'free'
  },
  {
    name: 'Plan Premium',
    price: '150',
    period: 'lunar',
    features: [
      'Toate resursele premium',
      'Exerciții practice nelimitate',
      'Ședințe de meditații (2/lună)',
      'Suport priorititar',
      'Acces la materiale exclusive'
    ],
    buttonText: 'Alege Pro',
    popular: true,
    planType: 'pro'
  }
];

function PricingCard({ plan, index }: { plan: typeof plans[0], index: number }) {
  const { isAuthenticated, isLoading } = useAuthNavigation(false);
  const { plan: userPlan } = useAuth();
  const router = useRouter();
  const isCurrent = userPlan?.plan_type === plan.planType && userPlan?.status === 'active';
  const isFreeAndCurrent = plan.planType === 'free' && userPlan?.plan_type === 'free' && isAuthenticated;
  
  const handleSubscribe = () => {
    if (plan.planType === 'free' && !isAuthenticated) {
      router.push('/sign-in');
      return;
    }
    if ((plan.planType === 'premium' || plan.planType === 'pro') && (!isAuthenticated)) {
      router.push('/sign-in');
      return;
    }
    // Placeholder for payment integration
    alert(`Funcționalitatea de plată pentru planul ${plan.name} va fi implementată în curând!`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
        plan.popular 
          ? 'border-[#FEBFD2] shadow-lg shadow-[#FEBFD2]/20' 
          : 'border-white/20'
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] text-gray-800 px-4 py-1 rounded-full text-sm font-semibold">
            Cel mai popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
        <div className="mb-4">
          {plan.planType === 'premium' ? (
            <>
              <span className="text-2xl font-semibold text-gray-400 line-through mr-2">{Math.round(Number(plan.price) / 0.8)}</span>
              <span className="text-4xl font-bold text-[#FF4D4F]">{plan.price}</span>
              <span className="ml-2 text-sm text-green-400 font-semibold bg-green-900/30 px-2 py-1 rounded">Reducere 20%</span>
            </>
          ) : (
            <>
              <span className="text-4xl font-bold text-white">{plan.price}</span>
            </>
          )}
          <span className="text-gray-300"> RON/{plan.period}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-center">
            <span className="text-[#FEBFD2] mr-3">✓</span>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={handleSubscribe}
        disabled={isLoading || isCurrent || isFreeAndCurrent}
        className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
          plan.popular
            ? 'bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] text-gray-800 hover:from-[#fef6f8] hover:to-[#fce9f0]'
            : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
        }`}
      >
        {isFreeAndCurrent ? 'Planul tău actual' : isCurrent ? 'Planul tău actual' : (isLoading ? 'Se încarcă...' : plan.buttonText)}
      </button>
    </motion.div>
  );
}

function PricingContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 overflow-hidden isolate">
      <Design />
      <Header />
      <div className="flex items-center justify-center min-h-[calc(100vh-100px)] px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-6xl"
        >
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl font-bold text-white mb-2"
            >
              Alege Planul Potrivit
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-300"
            >
              Deblochează accesul la toate resursele și ședințele.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 justify-center">
            {plans.map((plan, index) => (
              <PricingCard key={plan.name} plan={plan} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-gray-300 mb-4">
              Ai întrebări despre planuri? Contactează-ne pentru asistență personalizată.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="mailto:denisa.stanciu@example.com" className="text-[#FEBFD2] hover:text-[#FAD4E4]">
                denisa.stanciu@example.com
              </a>
              <span className="text-gray-500">|</span>
              <a href="tel:+40712345678" className="text-[#FEBFD2] hover:text-[#FAD4E4]">
                +40 712 345 678
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default function PricingPage() {
  const { error } = useAuthNavigation(false);
  const router = useRouter();

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md mx-auto p-6"
        >
          <div className="text-red-300 text-lg mb-4">
            Eroare de autentificare
          </div>
          <div className="text-gray-300 text-sm mb-6">
            {error}
          </div>
          <button
            onClick={() => router.refresh()}
            className="bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] text-gray-800 px-6 py-2 rounded-full font-semibold hover:from-[#fef6f8] hover:to-[#fce9f0] transition-all duration-300"
          >
            Reîncearcă
          </button>
        </motion.div>
      </div>
    );
  }

  return <PricingContent />;
}