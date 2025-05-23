import skylineImage from "@assets/sg-skyline.png";

export default function SingaporeImageSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <img 
            src={skylineImage} 
            alt="Singapore skyline at sunset" 
            className="rounded-lg shadow-xl w-full"
          />
        </div>
      </div>
    </section>
  );
}