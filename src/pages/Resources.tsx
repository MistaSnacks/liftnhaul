import { Button } from "@/components/ui/button";

const Resources = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b"
            alt="Moving resources and guides"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Moving Resources
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive guides and resources for a successful move
            </p>
          </div>
        </div>
      </section>
      
      {/* Resources Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Resource 1</h2>
              <p className="text-lg text-gray-600">
                Description of resource 1.
              </p>
              <Button className="bg-secondary text-black hover:bg-secondary/90">
                Learn More
              </Button>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Resource 2</h2>
              <p className="text-lg text-gray-600">
                Description of resource 2.
              </p>
              <Button className="bg-secondary text-black hover:bg-secondary/90">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
