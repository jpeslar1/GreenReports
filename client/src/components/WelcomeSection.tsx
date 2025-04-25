import { FaArrowRight } from "react-icons/fa";

export default function WelcomeSection() {
  return (
    <section className="py-16" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Welcome to Green Reports™</h2>
          <p className="text-gray-600 mb-6">
            Green Reports is an ESG advisory firm powering credible sustainability transitions. We specialize in compliance-ready ESG reporting, decarbonization roadmaps, and investor-grade disclosures—turning regulatory demands into competitive advantage.
          </p>
          <a href="#" className="text-primary hover:text-primary/80 font-medium flex items-center">
            READ MORE
            <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
