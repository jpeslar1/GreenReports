import { 
  FaChartLine, 
  FaLeaf, 
  FaGlobeAsia, 
  FaEnvelopeOpenText, 
  FaDesktop, 
  FaChartPie 
} from "react-icons/fa";
import { Button } from "@/components/ui/button";

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceItem({ icon, title, description }: ServiceProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="service-icon w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md mb-4 hover:scale-105 transition-transform duration-300">
        <div className="text-3xl text-primary">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function ServicesSection() {
  const services = [
    {
      icon: <FaChartLine />,
      title: "Carbon Strategy",
      description: "We help organizations identify and manage digital carbon footprints, creating a comprehensive strategy to reduce emissions and enhance sustainability practices for better outcomes."
    },
    {
      icon: <FaLeaf />,
      title: "Carbon Credits",
      description: "We offer companies the ability to achieve carbon neutrality by helping them identify quality carbon offset projects that match their sustainability goals and organizational needs."
    },
    {
      icon: <FaGlobeAsia />,
      title: "Sustainable Green Website",
      description: "We help to ensure that you are positioned as a responsible organization through sustainable web presence that reduces carbon impacts while enhancing brand image."
    },
    {
      icon: <FaEnvelopeOpenText />,
      title: "Email & Content",
      description: "We develop communication that are understanding and engaging to your audience, building connections that promote sustainable practices and enhancing brand appeal to different audiences."
    },
    {
      icon: <FaDesktop />,
      title: "Interactive Digital Documents",
      description: "Create professional interactive reports that capture the attention of stakeholders and bring sustainability initiatives to life through engaging visuals that enhance your brand and engaging content."
    },
    {
      icon: <FaChartPie />,
      title: "Digitize Your Offerings",
      description: "We help you transform traditional offerings into digital formats that enhance accessibility and sustainability while reducing costs and environmental impact for your business."
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Services & Solutions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((service, index) => (
            <ServiceItem 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button className="bg-[#99CC33] hover:bg-[#88bb22] text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 h-auto">
            GET STARTED TODAY
          </Button>
        </div>
      </div>
    </section>
  );
}
