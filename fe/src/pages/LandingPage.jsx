import FeaturesSection from "../components/LandingPage/FeaturesSection";
import Footer from "../components/LandingPage/Footer";
import HeroSection from "../components/LandingPage/HeroSection";
import Navbar from "../components/Dashboard/Navbar";
import PricingSection from "../components/LandingPage/PricingSection";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />

      <FeaturesSection />

      <PricingSection />
      <Footer />
    </>
  );
};

export default LandingPage;
