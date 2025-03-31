import { FaArrowRight } from "react-icons/fa";

interface InfoBoxProps {
  title: string;
  description: string;
}

function InfoBox({ title, description }: InfoBoxProps) {
  return (
    <div className="info-box bg-[#43BEA9] text-white p-6 rounded-lg shadow-lg hover:-translate-y-1 transition-transform duration-300">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm mb-4">{description}</p>
      <a href="#" className="text-white hover:underline text-sm flex items-center">
        Learn more
        <FaArrowRight className="ml-2" />
      </a>
    </div>
  );
}

export default function InfoBoxes() {
  const infoBoxes = [
    {
      title: "SUSTAINABLE",
      description: "Assisting business to improve their awareness, helping them create a more sustainable working practices."
    },
    {
      title: "PROFITABLE",
      description: "Sustainability is profitable for your business. Reducing your carbon costs is not just green."
    },
    {
      title: "DIGITAL",
      description: "Advanced Digital Solutions ensuring every report is accessible to legally interested for you."
    }
  ];

  return (
    <section className="bg-white py-10 mt-8 mb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {infoBoxes.map((box, index) => (
            <InfoBox key={index} title={box.title} description={box.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
