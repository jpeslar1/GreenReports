import { Button } from "@/components/ui/button";
import marinaGardensImage from "@assets/sg-marina-gardens.jpg";

export default function HeroSection() {
  return (
    <section className="text-white py-20 md:py-28 relative">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `url(${marinaGardensImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)'
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            HELP TO REDUCE COSTS AND BUILD A MORE SUSTAINABLE FUTURE
          </h1>
          <p className="text-xl mb-6">Providing Carbon Studies</p>
          <Button className="bg-[#99CC33] hover:bg-[#88bb22] text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 h-auto">
            LEARN MORE
          </Button>
        </div>
      </div>
    </section>
  );
}
