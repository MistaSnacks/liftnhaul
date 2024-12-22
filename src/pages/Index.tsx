import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Truck, Package, Home, Box, Star, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517022812141-23620dba5c23"
            alt="Moving background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8 animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Professional Moving Services in Tacoma
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Trusted movers serving Pierce County and beyond. Licensed, insured, and committed to making your move stress-free.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-secondary text-black hover:bg-secondary/90">
                Get a Free Quote
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-xl text-gray-600">
              Comprehensive moving solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Truck,
                title: "Local Moving",
                description: "Professional moving services in Tacoma and Pierce County area",
                image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b",
                path: "/services/local-moving"
              },
              {
                icon: Box,
                title: "Packing Services",
                description: "Expert packing and unpacking for a stress-free move",
                image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115",
                path: "/services/packing-services"
              },
              {
                icon: Home,
                title: "Apartment Moving",
                description: "Specialized solutions for apartment relocations",
                image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
                path: "/services/apartment-moving"
              },
              {
                icon: Truck,
                title: "Long Distance Moving",
                description: "Reliable interstate and long-distance relocations",
                image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8",
                path: "/services/long-distance-moving"
              },
            ].map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <div className="h-40 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <service.icon className="h-12 w-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1502175353174-a7a70e73b362"
            alt="Mount Rainier and Tacoma Skyline"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Service Areas</h2>
            <p className="mt-4 text-xl text-gray-200">
              Professional moving services across Western Washington
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Pierce County",
                description: "Tacoma, Puyallup, Lakewood",
                path: "/resources/service-areas/pierce-county"
              },
              {
                name: "King County",
                description: "Seattle, Bellevue, Kent",
                path: "/resources/service-areas/king-county"
              },
              {
                name: "Thurston County",
                description: "Olympia, Lacey, Tumwater",
                path: "/resources/service-areas/thurston-county"
              },
              {
                name: "Kitsap County",
                description: "Bremerton, Port Orchard, Poulsbo",
                path: "/resources/service-areas/kitsap-county"
              }
            ].map((area, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors"
              >
                <MapPin className="w-12 h-12 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{area.name}</h3>
                <p className="text-gray-200 mb-4">{area.description}</p>
                <Link to={area.path}>
                  <Button variant="secondary" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
            <p className="mt-4 text-xl text-gray-600">
              Real experiences from satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "Tacoma, WA",
                image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
                text: "The team made our local move completely stress-free. They handled our furniture with care and were incredibly professional throughout the entire process. Highly recommend!",
                rating: 5
              },
              {
                name: "Michael Chen",
                location: "Lakewood, WA",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
                text: "Their packing service was a lifesaver! They carefully packed all our belongings and labeled everything clearly. The unpacking was just as organized. Worth every penny.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                location: "University Place, WA",
                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
                text: "Moving from my apartment was seamless. The crew was punctual, efficient, and took extra care with my furniture. They made the whole process so much easier!",
                rating: 5
              },
              {
                name: "David Thompson",
                location: "Gig Harbor, WA",
                image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
                text: "Outstanding service from start to finish. The team was professional, courteous, and handled our long-distance move with expertise. Everything arrived in perfect condition.",
                rating: 5
              },
              {
                name: "Lisa Martinez",
                location: "Puyallup, WA",
                image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
                text: "I was impressed by their attention to detail during our local move. They wrapped all furniture carefully and were very efficient. Great communication throughout!",
                rating: 5
              },
              {
                name: "James Wilson",
                location: "Federal Way, WA",
                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
                text: "The packing and moving service exceeded my expectations. They were thorough, professional, and made our move stress-free. Would definitely use them again!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fadeIn"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1501286353178-1ec881214838"
            alt="Moving CTA background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Make Your Move?
          </h2>
          <Button size="lg" className="bg-secondary text-black hover:bg-secondary/90">
            Get Your Free Quote Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;