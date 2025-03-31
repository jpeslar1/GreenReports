import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="text-white py-20 md:py-32 relative">
      <div 
        className="absolute inset-0 bg-black/40 z-0" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'darken'
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
