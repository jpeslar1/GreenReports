export default function GardensByTheBaySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Singapore's Commitment to Sustainability</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Singapore exemplifies sustainability through iconic landmarks like Gardens by the Bay. 
                These supertrees and biodomes demonstrate how urban development can harmonize with 
                environmental stewardship, serving as a model for sustainable city planning in Asia.
              </p>
              <p className="text-gray-600 leading-relaxed">
                At Green Reports, we help organizations align with Singapore's vision of 
                environmental responsibility, creating sustainability reports that showcase your 
                commitment to ecological balance while meeting regulatory requirements.
              </p>
            </div>
            <div>
              <img 
                src="/images/sg-marina-gardens.jpg" 
                alt="Gardens by the Bay in Singapore" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}