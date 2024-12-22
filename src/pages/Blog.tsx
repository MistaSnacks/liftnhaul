import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";

const Blog = () => {
  const blogPosts = [
    {
      title: "Moving to Tacoma: Your Complete Guide",
      path: "/blog/moving-to-tacoma-guide",
      description: "Everything you need to know about relocating to Tacoma, WA",
      image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad",
    },
    {
      title: "Best Neighborhoods in Tacoma",
      path: "/blog/best-tacoma-neighborhoods",
      description: "Discover the unique character of Tacoma's top neighborhoods",
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118",
    },
    {
      title: "Moving Tips & Tricks",
      path: "/blog/moving-tips-and-tricks",
      description: "Expert advice for a smooth and stress-free move",
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115",
    },
    {
      title: "Living in Olympia: A Comprehensive Guide",
      path: "/blog/living-in-olympia-guide",
      description: "Discover life in Washington's capital city",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    },
    {
      title: "Port Orchard: Your Ultimate Guide",
      path: "/blog/port-orchard-living-guide",
      description: "Everything about living in Port Orchard, WA",
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3",
    },
    {
      title: "Seattle Living Guide",
      path: "/blog/seattle-living-guide",
      description: "Navigate life in the Emerald City",
      image: "https://images.unsplash.com/photo-1502175353174-a7a70e73b362",
    },
    {
      title: "Bellevue: A Modern Living Guide",
      path: "/blog/bellevue-living-guide",
      description: "Explore life in the heart of the Eastside",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
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
            alt="Moving services"
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
                  alt={post.title}
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