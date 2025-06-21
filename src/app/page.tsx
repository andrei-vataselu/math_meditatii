'use client';

import FloatingMathSymbols from './components/FloatingMathSymbols';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import FeatureShowcase from './components/FeatureShowcase';
import Statistics from './components/Statistics';
import CTA from './components/CTA';
import Footer from './components/Footer';

const features = [
  {
    title: "Exerciții interactive",
    description: "Învață conceptele matematice prin aplicații practice și jocuri logice.",
    icon: "🧮",
    color: "from-[#FEBFD2] to-[#FAD4E4]"
  },
  {
    title: "Plan personalizat de învățare",
    description: "Adaptat ritmului tău, creat de Denisa pentru rezultate reale.",
    icon: "🎯",
    color: "from-[#FAD4E4] to-[#DB0073]"
  },
  {
    title: "Urmărirea progresului",
    description: "Vezi cum evoluezi cu feedback simplu și constant.",
    icon: "📊",
    color: "from-[#FEBFD2] to-[#DB0073]"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 overflow-hidden isolate">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FEBFD2] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#DB0073] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-[#FAD4E4] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        <FloatingMathSymbols />
      </div>

      <Header />
      <Hero />
      <Features features={features} />
      <FeatureShowcase features={features} />
      <Statistics />
      <CTA />
      <Footer />
    </div>
  );
}
