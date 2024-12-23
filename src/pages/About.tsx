import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import EditableText from "@/components/ui/editable-text";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>About Us | LiftNHaul Moving Services</title>
        <meta 
          name="description" 
          content="Learn about LiftNHaul's history, values, and commitment to providing professional moving services in Tacoma and Pierce County." 
        />
      </Helmet>

      <section className="pt-24 pb-12 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/9d482628-c117-42b0-8948-8596e4b18d60.png"
            alt="Professional moving services - LiftNHaul moving truck being loaded"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8 animate-fadeIn">
            <EditableText
              id="about-title"
              defaultText="Tacoma's Trusted Family-Owned Moving Company"
              className="text-4xl md:text-6xl font-bold leading-tight"
              as="h1"
            />
            <EditableText
              id="about-subtitle"
              defaultText="Serving Pierce County families and businesses since 2010 with professional, reliable moving services"
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <EditableText
                id="our-story-title"
                defaultText="Our Story"
                className="text-3xl font-bold text-gray-900"
                as="h2"
              />
              <EditableText
                id="our-story-p1"
                defaultText="Founded in 2010 by the Johnson family, LiftNHaul has grown from a single truck operation to Tacoma's premier moving service. As a family-owned business, we understand the importance of treating your belongings with the same care we would give our own."
                className="text-lg text-gray-600"
              />
              <EditableText
                id="our-story-p2"
                defaultText="Our deep roots in Pierce County have helped us build lasting relationships with our community, earning us a reputation for reliability, professionalism, and exceptional customer service."
                className="text-lg text-gray-600"
              />
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1473163928189-364b2c4e1135"
                alt="Family owned moving company team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EditableText
            id="values-title"
            defaultText="Our Core Values"
            className="text-3xl font-bold text-center mb-12"
            as="h2"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Family Values",
                description: "We treat every customer like family, providing personalized service and attention to detail that only a family-owned business can deliver.",
                image: "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8"
              },
              {
                title: "Local Expertise",
                description: "With over a decade of experience moving families throughout Pierce County, we know every neighborhood and understand local moving challenges.",
                image: "https://images.unsplash.com/photo-1609715572512-cce1996e4ff4"
              },
              {
                title: "Professional Excellence",
                description: "Our team of licensed and insured movers undergoes rigorous training to ensure your move is handled with the utmost care and efficiency.",
                image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b"
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <EditableText
                    id={`value-title-${index}`}
                    defaultText={value.title}
                    className="text-xl font-semibold mb-2"
                    as="h3"
                  />
                  <EditableText
                    id={`value-description-${index}`}
                    defaultText={value.description}
                    className="text-gray-600"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b"
            alt="Professional movers in Tacoma"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <EditableText
            id="cta-title"
            defaultText="Ready to Experience the LiftNHaul Difference?"
            className="text-3xl font-bold mb-8"
            as="h2"
          />
          <Button size="lg" className="bg-secondary text-black hover:bg-secondary/90" asChild>
            <Link to="/contact">Get Your Free Quote Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;