import { 
  FaUsers, 
  FaExchangeAlt, 
  FaCalculator, 
  FaLeaf,
  FaHandshake,
  FaChartLine,
  FaDatabase,
  FaRecycle
} from "react-icons/fa";
import { Button } from "@/components/ui/button";

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgClass: string;
}

function ServiceItem({ icon, title, description, iconBgClass }: ServiceProps) {
  return (
    <div className="flex flex-col items-center text-center px-6">
      <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-5 hover:scale-105 transition-transform duration-300 ${iconBgClass}`}>
        <div className="text-3xl text-white">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default function ServicesSection() {
  // Using the primary color from theme.json: hsl(153, 83%, 29%)
  const primaryGreen = "bg-[#0a9155]";
  
  const services = [
    {
      icon: <FaHandshake />,
      title: "Stakeholder Engagement",
      description: "Good stakeholder engagement demonstrates a commitment to building meaningful relationships with diverse stakeholders, fostering open communication, and creating shared value. Our services help you fostering meaningful connections that contribute to the long-term success and sustainability of both the organization and its stakeholders.",
      iconBgClass: primaryGreen
    },
    {
      icon: <FaChartLine />,
      title: "ESG Advisory",
      description: "The best ESG advisory service integrates sustainability into the core of business operations, guides clients toward responsible practices, and contributes to long-term value creation for both the organization and its stakeholders.",
      iconBgClass: primaryGreen
    },
    {
      icon: <FaDatabase />,
      title: "ESG Data and Modeling Building",
      description: "ESG data collection and calculation model services involve systematically gathering and analyzing information related to a company's ESG key performance indicators and financial impact from climate risk. These services are crucial for organizations aiming to measure, report, and improve their sustainability practices. One example is complete GHG Scope 1-3 model building service.",
      iconBgClass: primaryGreen
    },
    {
      icon: <FaRecycle />,
      title: "Sustainable Supply Chain and Green Procurement",
      description: "Establishing a responsible supply chain and implementing green procurement are services focused on promoting ethical and environmentally sustainable practices within an organization's sourcing and supply chain operations.",
      iconBgClass: primaryGreen
    }
  ];

  return (
    <section className="py-16 bg-white" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Services & Solutions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {services.map((service, index) => (
            <ServiceItem 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              iconBgClass={service.iconBgClass}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact">
            <Button className="bg-[#99CC33] hover:bg-[#88bb22] text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 h-auto">
              GET STARTED TODAY
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
