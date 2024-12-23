import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";

const Blog = () => {
  const blogPosts = [
    {
      title: "Moving to Tacoma: Your Complete Guide",
      path: "/blog/moving-to-tacoma-guide",
      description: "Everything you need to know about relocating to Tacoma, WA",
      image: "/lovable-uploads/47c8688d-a2e1-4523-936f-a77517aa47d1.png",
      alt: "Tacoma waterfront at sunset with marina and city skyline"
    },
    {
      title: "Best Neighborhoods in Tacoma",
      path: "/blog/best-tacoma-neighborhoods",
      description: "Discover the unique character of Tacoma's top neighborhoods",
      image: "/lovable-uploads/47be9504-23a0-448a-953d-f4138d94615d.png",
      alt: "Point Ruston waterfront featuring modern luxury apartments and community spaces"
    },
    {
      title: "Living in Olympia: A Comprehensive Guide",
      path: "/blog/living-in-olympia-guide",
      description: "Discover life in Washington's capital city",
      image: "/lovable-uploads/3e62240c-5e1e-496b-83f2-dea72304b102.png",
      alt: "Aerial view of Olympia's port and waterfront at dusk"
    },
    {
      title: "Port Orchard: Your Ultimate Guide",
      path: "/blog/port-orchard-living-guide",
      description: "Everything about living in Port Orchard, WA",
      image: "/lovable-uploads/6962ae5a-1011-4fb4-8245-5c2c1bb5c41a.png",
      alt: "Downtown Port Orchard waterfront featuring local businesses, marina with boats, and scenic hillside homes overlooking Sinclair Inlet"
    },
    {
      title: "Seattle Living Guide",
      path: "/blog/seattle-living-guide",
      description: "Navigate life in the Emerald City",
      image: "/lovable-uploads/b383a86e-28a0-415a-b550-4e3f69342350.png",
      alt: "Seattle skyline featuring Space Needle and downtown buildings"
    },
    {
      title: "Bellevue: A Modern Living Guide",
      path: "/blog/bellevue-living-guide",
      description: "Explore life in the heart of the Eastside",
      image: "/lovable-uploads/be984819-5b89-4169-a886-620a3dde6bcf.png",
      alt: "Downtown Bellevue skyline with modern high-rise buildings"
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Moving & Relocation Blog | LiftNHaul</title>
        <meta
          name="description"
          content="Expert moving tips, city guides, and relocation advice from LiftNHaul. Learn about living in the Pacific Northwest and make your move easier."
        />
      </Helmet>

      <div className="pt-24 pb-12 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/9d482628-c117-42b0-8948-8596e4b18d60.png"
            alt="Professional moving company truck and team providing expert moving services in Tacoma"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Moving & Relocation Blog</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Expert moving tips, city guides, and relocation advice to make your move easier.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link key={post.path} to={post.path}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <img
                  src={post.image}
                  alt={post.alt}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600">{post.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;