import { Helmet } from "react-helmet";

const ApartmentMoving = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <Helmet>
        <title>Apartment Moving Services Tacoma | LiftNHaul</title>
        <meta name="description" content="Specialized apartment moving services in Tacoma. Expert handling of stairs, elevators, and tight spaces for a smooth apartment relocation." />
        <meta name="keywords" content="apartment moving, Tacoma apartment movers, residential moving, elevator moving" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Apartment Moving Services</h1>
          <p className="text-xl text-gray-600">Specialized solutions for apartment relocations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
              alt="Apartment moving service"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Expert Apartment Moving</h2>
            <p className="text-gray-600">
              Our apartment moving services are specifically designed to handle the unique challenges of apartment relocations. We're experienced in navigating stairs, elevators, and tight spaces while protecting your belongings and the building's property. Our team understands the complexities of apartment moves and has developed specialized techniques to ensure a smooth transition.
            </p>
            <p className="text-gray-600">
              Whether you're moving to a high-rise apartment or a garden-style complex, our experienced movers have the expertise to handle your move efficiently and safely. We take extra precautions to protect both your belongings and the building's common areas throughout the moving process.
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Specialized Apartment Moving Services</h2>
          <p className="text-gray-600 mb-4">
            Our apartment moving services include comprehensive solutions tailored to the unique requirements of apartment relocations. We handle everything from securing elevator access and parking permits to protecting hallways and common areas during the move. Our team is trained in the best practices for navigating tight corners, narrow hallways, and multiple flights of stairs.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Building Protection</h2>
          <p className="text-gray-600 mb-4">
            We take extra care to protect your apartment building's common areas during the move. This includes using floor runners, door jamb protectors, and elevator padding to prevent any damage. Our team is also experienced in working with building management to ensure compliance with all moving regulations and requirements.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Additional Services</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
            <li>Elevator reservation coordination</li>
            <li>Proper protection of common areas</li>
            <li>Specialized equipment for tight spaces</li>
            <li>Furniture disassembly and reassembly</li>
            <li>Packing and unpacking services</li>
            <li>Storage solutions if needed</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ApartmentMoving;
