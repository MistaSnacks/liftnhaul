import { Helmet } from "react-helmet";

const ThurstonCounty = () => {
  return (
    <>
      <Helmet>
        <title>Moving Services in Thurston County | Professional Movers | LiftNHaul</title>
        <meta 
          name="description" 
          content="Reliable moving services in Thurston County, WA. Serving Olympia, Lacey, Tumwater, and surrounding areas with expert local and long-distance moving solutions." 
        />
        <meta 
          name="keywords" 
          content="Thurston County movers, Olympia moving company, Lacey movers, Tumwater moving services, professional moving Thurston County" 
        />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 mt-24">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="prose max-w-none text-left">
            <h1 className="text-4xl font-bold text-primary mb-8">Moving Services in Thurston County</h1>
            
            <p className="text-lg mb-6">
              LiftNHaul provides comprehensive moving services throughout Thurston County, including Olympia, Lacey, Tumwater, and surrounding areas. Our team's familiarity with the region ensures efficient and reliable moving services for both residential and commercial clients.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Areas We Serve in Thurston County</h2>
            <p className="mb-6">
              Olympia - Including Downtown and West Side<br />
              Lacey - Including Hawks Prairie and Woodland<br />
              Tumwater<br />
              Yelm<br />
              Rochester<br />
              Tenino<br />
              Rainier
            </p>

            <h2 className="text-2xl font-semibold mb-4">Local Knowledge and Expertise</h2>
            <p className="mb-6">
              Our experience in Thurston County allows us to navigate the unique aspects of moving in the state capital region. We understand the local communities and can provide efficient service while avoiding common moving challenges.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Comprehensive Moving Solutions</h2>
            <p className="mb-6">
              Whether you're moving to a historic home in downtown Olympia or a new development in Lacey, our team has the expertise to handle your move with care and precision. We offer a full range of moving services tailored to meet your specific needs.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Our Thurston County Services</h2>
            <p className="mb-6">
              Local residential moving<br />
              Commercial and office relocations<br />
              Government office moving<br />
              Professional packing services<br />
              Storage solutions<br />
              Specialty item moving<br />
              Senior moving assistance
            </p>
          </div>

          <div className="space-y-6">
            <img
              src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86"
              alt="Thurston County landscape"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1518495973542-4542c06a5843"
              alt="Thurston County nature"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThurstonCounty;