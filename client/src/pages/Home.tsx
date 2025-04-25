import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import BusinessesSection from "@/components/BusinessesSection";
import SingaporeImageSection from "@/components/SingaporeImageSection";
import ServicesSection from "@/components/ServicesSection";
import BlogSection from "@/components/BlogSection";
import ContactForm from "@/pages/ContactForm";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Green Reports - ESG Advisory Services in Singapore</title>
        <meta name="description" content="Green Reports offers high-quality, tailor-made ESG advisory services to Singaporean companies. We help businesses reduce costs and build a more sustainable future." />
        <meta name="keywords" content="ESG consulting, sustainability reporting, Singapore ESG advisory, climate reporting, carbon studies, environmental consulting, ESG compliance" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Green Reports - ESG Advisory Services in Singapore" />
        <meta property="og:description" content="Green Reports offers high-quality, tailor-made ESG advisory services to Singaporean companies. We help businesses reduce costs and build a more sustainable future." />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Green Reports - ESG Advisory Services in Singapore" />
        <meta property="twitter:description" content="Green Reports offers high-quality, tailor-made ESG advisory services to Singaporean companies. We help businesses reduce costs and build a more sustainable future." />
        <meta property="twitter:image" content="/og-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://greenreports.co/" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Green Reports",
            "url": "https://greenreports.co",
            "logo": "https://greenreports.co/favicon.ico",
            "description": "Green Reports offers high-quality, tailor-made ESG advisory services to Singaporean companies. We help businesses reduce costs and build a more sustainable future.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Singapore"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "contact@greenreports.co"
            },
            "sameAs": [
              "https://www.linkedin.com/company/greenreports",
              "https://twitter.com/greenreports"
            ]
          })}
        </script>
        
        {/* Local Business Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Green Reports",
            "image": "/og-image.jpg",
            "url": "https://greenreports.co",
            "telephone": "+65-xxxx-xxxx",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Singapore"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            },
            "priceRange": "$$"
          })}
        </script>
      </Helmet>
      
      <Header />
      <Navigation />
      <HeroSection />
      <WelcomeSection />
      <BusinessesSection />
      <SingaporeImageSection />
      <ServicesSection />
      <BlogSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
