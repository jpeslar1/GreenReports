import { FaBuilding, FaIndustry } from "react-icons/fa";

interface ServiceListProps {
  items: string[];
}

function ServiceList({ items }: ServiceListProps) {
  return (
    <ul className="space-y-2 mt-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-primary font-bold mr-2">-</span>
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function BusinessesSection() {
  const corporateServices = [
    "Climate-Related Risk and Opportunities Management",
    "Scenario Analysis",
    "Greenhouse Gas Emissions Calculation – Scope 1, 2, 3 emissions based on GHG protocol",
    "Sustainability Target Settings under SBTi",
    "GRI Reporting"
  ];

  const mediumBusinessServices = [
    "Greenhouse Gas Emissions Management – Scope 1, 2, 3 (optional) emissions based on GHG protocol",
    "Product Based GHG Evaluation Model for Product Based GHG Disclosure",
    "ESG Management Framework – Getting Started ESG Management Journey"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Businesses We Serve</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Corporate Services */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaBuilding className="text-3xl text-primary mr-4" />
              <h3 className="text-xl font-bold text-gray-800">For public companies and larger corporations</h3>
            </div>
            <ServiceList items={corporateServices} />
          </div>
          
          {/* Medium Business Services */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaIndustry className="text-3xl text-primary mr-4" />
              <h3 className="text-xl font-bold text-gray-800">For medium businesses taking action to fulfil the ESG requirements from their larger corporate customers</h3>
            </div>
            <ServiceList items={mediumBusinessServices} />
          </div>
        </div>
      </div>
    </section>
  );
}