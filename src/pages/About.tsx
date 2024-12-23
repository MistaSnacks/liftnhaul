import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Matched to Home page styling */}
      <section className="pt-24 pb-12 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/b383a86e-28a0-415a-b550-4e3f69342350.png"
            alt="Professional LiftNHaul mover in company uniform showcasing dedication to quality service"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8 animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Tacoma's Trusted Family-Owned Moving Company
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Serving Pierce County families and businesses since 2010 with professional, reliable moving services
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600">
                Founded in 2010 by the Johnson family, LiftNHaul has grown from a single truck operation to Tacoma's premier moving service. As a family-owned business, we understand the importance of treating your belongings with the same care we would give our own.
              </p>
              <p className="text-lg text-gray-600">
                Our deep roots in Pierce County have helped us build lasting relationships with our community, earning us a reputation for reliability, professionalism, and exceptional customer service.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/lovable-uploads/15f86686-87a0-4835-96ac-9fb21dbdc095.png"
                alt="LiftNHaul professional mover showcasing our commitment to excellence and professionalism"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Family Values",
                description: "We treat every customer like family, providing personalized service and attention to detail that only a family-owned business can deliver.",
                image: "/lovable-uploads/fdff4c77-00a3-43b1-8ad9-f07783cb187e.png",
                alt: "LiftNHaul mover carefully loading customer belongings demonstrating our family-first approach"
              },
              {
                title: "Local Expertise",
                description: "With over a decade of experience moving families throughout Pierce County, we know every neighborhood and understand local moving challenges.",
                image: "/lovable-uploads/8304f55b-626e-4fd3-9277-9d997aa3f85d.png",
                alt: "LiftNHaul professional mover organizing items in moving truck showing local expertise"
              },
              {
                title: "Professional Excellence",
                description: "Our team of licensed and insured movers undergoes rigorous training to ensure your move is handled with the utmost care and efficiency.",
                image: "/lovable-uploads/284d11ed-eb47-487f-a98e-ff17a493f91f.png",
                alt: "LiftNHaul team member in uniform exemplifying our professional moving standards"
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <img
                    src={value.image}
                    alt={value.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/284d11ed-eb47-487f-a98e-ff17a493f91f.png"
            alt="LiftNHaul professional moving team member in action"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-8">
            Ready to Experience the LiftNHaul Difference?
          </h2>
          <Button size="lg" className="bg-secondary text-black hover:bg-secondary/90">
            Get Your Free Quote Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;