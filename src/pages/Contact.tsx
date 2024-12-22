import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import Map from "@/components/Map";

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&q=80")' }}>
        <div className="absolute inset-0 bg-primary/70">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg md:text-xl max-w-2xl">
                Get in touch with Pierce County's trusted moving experts. We're here to make your move stress-free.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Service Area</h2>
          <p className="text-gray-600 mb-8">
            We proudly serve Tacoma and the surrounding Pierce County area, providing professional 
            moving services to both residential and commercial customers.
          </p>
          <div className="h-[400px] rounded-lg overflow-hidden">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;