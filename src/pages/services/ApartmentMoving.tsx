
import { Helmet } from "react-helmet";

const ApartmentMoving = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Apartment Moving Services Tacoma | LiftNHaul Movers</title>
        <meta name="description" content="Specialized apartment moving services in Tacoma. Expert handling of stairs, elevators, and tight spaces for a smooth apartment relocation." />
        <meta name="keywords" content="apartment moving tacoma, tacoma moving company, residential moving services, elevator moving, furniture moving company, pierce county movers" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Moving Service",
              "provider": {
                "@type": "MovingCompany",
                "name": "LiftNHaul Movers",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Tacoma",
                  "addressRegion": "WA"
                }
              },
              "name": "Apartment Moving Services",
              "description": "Specialized apartment moving services in Tacoma. Expert handling of stairs, elevators, and tight spaces for a smooth apartment relocation.",
              "areaServed": "Tacoma and Pierce County",
              "mainEntityOfPage": "https://liftnhaul.com/services/apartment-moving"
            }
          `}
        </script>
      </Helmet>

      <div className="pt-24 pb-12 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
            alt="Apartment moving service"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Apartment Moving Services Tacoma</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Specialized solutions for apartment relocations
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
              alt="Apartment moving service"
              className="w-full h-[500px] object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900">Expert Apartment Moving in Tacoma</h2>
              <p className="text-gray-600">
                Our apartment moving services are specifically designed to handle the unique challenges of apartment relocations. We're experienced in navigating stairs, elevators, and tight spaces while protecting your belongings and the building's property. Our team understands the complexities of apartment moves and has developed specialized techniques to ensure a smooth transition.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8">Building Protection</h2>
              <p className="text-gray-600">
                We take extra care to protect your apartment building's common areas during the move. This includes using floor runners, door jamb protectors, and elevator padding to prevent any damage. Our team is also experienced in working with building management to ensure compliance with all moving regulations and requirements.
              </p>

              <p className="text-gray-600">
                As a professional furniture moving company, our services include elevator reservation coordination, proper protection of common areas, specialized equipment for tight spaces, furniture disassembly and reassembly, packing and unpacking services, and storage solutions if needed. We're committed to providing the most efficient and stress-free apartment moving experience in Tacoma.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentMoving;
