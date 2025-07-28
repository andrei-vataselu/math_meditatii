"use client";
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import FeatureShowcase from './components/FeatureShowcase';
import Statistics from './components/Statistics';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Design from './components/Design';
import Link from 'next/link';
import { useUser } from '@/contexts/AuthContext';

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
  const { isSignedIn, isLoaded, error } = useUser();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 overflow-hidden isolate">
      <Design />
      <Header />
      <Hero />
      <Features features={features} />
      <FeatureShowcase />
      <Statistics />
      {/* Show Începe acum button if not signed in and loaded, or if error is 'No access token provided' */}
      {!isSignedIn && isLoaded && (
        <div className="flex justify-center my-8">
          <Link href="/sign-up">
            <button className="bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] text-gray-800 px-10 py-4 rounded-full text-xl font-semibold hover:from-[#fef6f8] hover:to-[#fce9f0] transition-all duration-300 transform hover:scale-105 shadow-lg">
              Începe acum
            </button>
          </Link>
        </div>
      )}
      {/* If error is 'No access token provided', show button and error message */}
      {error === 'No access token provided' && (
        <div className="flex flex-col items-center my-8">
          <div className="text-red-300 text-lg mb-2">Nu ești autentificat!</div>
          <div className="flex gap-4">
            <Link href="/sign-in">
              <button className="bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] text-gray-800 px-8 py-4 rounded-full text-xl font-semibold hover:from-[#fef6f8] hover:to-[#fce9f0] transition-all duration-300 transform hover:scale-105 shadow-lg">
                Conectează-te
              </button>
            </Link>
            <Link href="/sign-up">
              <button className="bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] text-gray-800 px-8 py-4 rounded-full text-xl font-semibold hover:from-[#fef6f8] hover:to-[#fce9f0] transition-all duration-300 transform hover:scale-105 shadow-lg">
                Începe acum
              </button>
            </Link>
          </div>
        </div>
      )}
      <CTA />
      <Footer />
    </div>
  );
}
