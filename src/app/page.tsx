import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import FeatureShowcase from './components/FeatureShowcase';
 
import Statistics from './components/Statistics';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Design from './components/Design';

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
      <Design />
      <Header />
      <Hero />
    
      <Features features={features} />
      <FeatureShowcase />
    
      <Statistics />
      <CTA />
      <Footer />
    </div>
  );
}
