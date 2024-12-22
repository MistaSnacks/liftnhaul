import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { File } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Moving to Tacoma: Your Complete Guide",
      path: "/blog/moving-to-tacoma-guide",
      description: "Everything you need to know about relocating to Tacoma, WA",
      content: "Discover what makes Tacoma a great place to live, from neighborhoods to activities and local culture."
    },
    {
      title: "Best Neighborhoods in Tacoma",
      path: "/blog/best-tacoma-neighborhoods",
      description: "Discover the unique character of Tacoma's top neighborhoods",
      content: "Explore Tacoma's diverse neighborhoods and find the perfect area for your lifestyle and needs."
    },
    {
      title: "Moving Tips & Tricks",
      path: "/blog/moving-tips-and-tricks",
      description: "Expert advice for a smooth and stress-free move",
      content: "Professional insights and practical tips to make your moving experience easier and more organized."
    },
    {
      title: "Living in Olympia: A Comprehensive Guide",
      path: "/blog/living-in-olympia",
      description: "Discover life in Washington's capital city",
      content: "Everything you need to know about moving to and living in Olympia, Washington's historic capital."
    },
    {
      title: "Port Orchard: Your Ultimate Moving Guide",
      path: "/blog/port-orchard-guide",
      description: "Everything about moving to Port Orchard, WA",
      content: "A complete guide to relocating to Port Orchard, featuring local insights and essential information."
    },
    {
      title: "Seattle Living: What to Know Before Moving",
      path: "/blog/seattle-living-guide",
      description: "Essential tips for relocating to Seattle",
      content: "Your comprehensive guide to moving to Seattle, from neighborhoods to lifestyle and culture."
    },
    {
      title: "Moving to Bellevue: A Complete Guide",
      path: "/blog/bellevue-guide",
      description: "Your comprehensive guide to life in Bellevue",
      content: "Everything you need to know about relocating to Bellevue, Washington's tech hub."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Moving & Relocation Blog | LiftNHaul</title>
        <meta 
          name="description" 
          content="Expert insights, local guides, and moving tips to help you navigate your relocation journey in the Pacific Northwest." 
        />
        <meta 
          name="keywords" 
          content="moving blog, relocation tips, Tacoma neighborhoods, moving advice, Pacific Northwest living, Seattle moving, Olympia relocation, Bellevue guide" 
        />
      </Helmet>
      
      <div className="min-h-screen">
        <div className="pt-24 pb-12 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b"
              alt="Moving blog"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center space-y-4 animate-fadeIn">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Moving & Relocation Blog</h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                Expert insights and local knowledge to help you navigate your move.
              </p>
            </div>
          </div>
        </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.title} to={post.path}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <File className="w-8 h-8 text-primary mb-2" />
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{post.content}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
