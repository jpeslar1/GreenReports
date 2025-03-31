import { FaArrowRight } from "react-icons/fa";

export default function WelcomeSection() {
  return (
    <section className="py-16" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Welcome to Green Reports™</h2>
            <p className="text-gray-600 mb-4">
              We are unique in offering a range and tailored 'green reporting' solutions for your needs to organizations of all sizes.
            </p>
            <p className="text-gray-600 mb-4">
              We provide leading edge digital reporting solutions that ensure your stakeholders are fully informed and that sustainability and corporation social responsibility statements are compliant with the latest regulations. We excel in collecting and reporting of carbon data, environmental analysis and in software development services, we believe in especially, the calculations and reporting on current and future carbon scenarios to prove cost benefits and savings for stockholders.
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
