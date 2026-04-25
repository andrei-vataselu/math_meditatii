import homeMetadata from "./page.metadata";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FeatureShowcase from "./components/FeatureShowcase";
import Statistics from "./components/Statistics";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Design from "./components/Design";

export const metadata = homeMetadata;

const features = [
  {
    title: "Exerciții pentru EN și Bac structurate pe tipuri de subiecte",
    description:
      "Rezolvă exerciții specifice tiparului de la EN sau Bac, organizate pe capitole și niveluri de dificultate.",
    icon: "🧮",
    color: "from-[#FEBFD2] to-[#FAD4E4]",
  },
  {
    title: "Plan de învățare pentru EN și Bac, adaptat nivelului tău",
    description:
      "Urmezi un plan structurat, conceput de Denisa, care acoperă toată programa și te ajută să recuperezi rapid lacunele.",
    icon: "🎯",
    color: "from-[#FAD4E4] to-[#DB0073]",
  },
  {
    title: "Monitorizarea progresului pentru rezultate reale",
    description:
      "Vezi clar cum evoluezi, unde ai dificultăți și ce ai de îmbunătățit pentru a-ți atinge ținta la EN sau Bac.",
    icon: "📊",
    color: "from-[#FEBFD2] to-[#DB0073]",
  },
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
