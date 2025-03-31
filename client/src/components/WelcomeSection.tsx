import { FaArrowRight } from "react-icons/fa";

export default function WelcomeSection() {
  return (
    <section className="py-16" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Welcome to Green Reports™</h2>
            <p className="text-gray-600 mb-6">
              Established in 2024, Green Reports is a Singapore-based ESG advisory services company. We specialize in offering high-quality and tailor-made ESG advisory services to Singaporean companies.
            </p>
            <a href="#" className="text-primary hover:text-primary/80 font-medium flex items-center">
              READ MORE
              <FaArrowRight className="ml-2" />
            </a>
          </div>
          <div>
            <img 
              src="https://www.traveltalktours.com/wp-content/smush-webp/2023/12/swapnil-bapat-sJ7pYyJFyuA-unsplash-1-scaled.jpg.webp" 
              alt="Singapore skyline at sunset" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
