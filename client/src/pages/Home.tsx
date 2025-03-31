import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import InfoBoxes from "@/components/InfoBoxes";
import WelcomeSection from "@/components/WelcomeSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import ContactTestimonials from "@/components/ContactTestimonials";
import ClientLogos from "@/components/ClientLogos";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navigation />
      <HeroSection />
      <InfoBoxes />
      <WelcomeSection />
      <ServicesSection />
      <StatsSection />
      <ContactTestimonials />
      <ClientLogos />
      <Newsletter />
      <Footer />
    </div>
  );
}
