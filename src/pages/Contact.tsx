
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Contact Us | LiftNHaul Movers Tacoma</title>
        <meta name="description" content="Get in touch with Tacoma's trusted moving experts. Request a quote for local or long-distance moving, packing services, and more." />
        <meta name="keywords" content="moving company near me, tacoma moving company, pierce county movers, affordable movers tacoma, contact movers, moving quote" />
      </Helmet>
      
      <div className="pt-24 pb-12 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/9d482628-c117-42b0-8948-8596e4b18d60.png"
            alt="Contact us"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Get in touch with Pierce County's trusted moving experts. We're here to make your move stress-free.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
