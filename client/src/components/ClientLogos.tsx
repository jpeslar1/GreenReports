import { FaBuilding, FaUniversity, FaPlane, FaCar } from "react-icons/fa";

export default function ClientLogos() {
  const logos = [
    { icon: <FaBuilding className="h-10 w-auto" />, name: "Westpac" },
    { icon: <FaUniversity className="h-10 w-auto" />, name: "DBS Bank" },
    { icon: <FaUniversity className="h-10 w-auto" />, name: "OCBC Bank" },
    { icon: <div className="h-10 flex items-center justify-center text-xl font-bold">SGX</div>, name: "Singapore Exchange" },
    { icon: <FaCar className="h-10 w-auto" />, name: "Grab" },
    { icon: <FaPlane className="h-10 w-auto" />, name: "Singapore Airlines" }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
          {logos.map((logo, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
              {logo.icon}
              <span className="sr-only">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
