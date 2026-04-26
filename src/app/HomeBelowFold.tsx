import Features from "./components/Features";
import FeatureShowcase from "./components/FeatureShowcase";
import Statistics from "./components/Statistics";
import HomeSeoContent from "./components/HomeSeoContent";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export type HomeFeature = {
  title: string;
  description: string;
  icon: string;
  color: string;
};

export default function HomeBelowFold({
  features,
}: {
  features: HomeFeature[];
}) {
  return (
    <>
      <Features features={features} />
      <FeatureShowcase />
      <Statistics />
      <HomeSeoContent />
      <CTA />
      <Footer />
    </>
  );
}
