import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b"
            alt="Moving and relocation blog"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Moving Resources & Tips
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Expert advice and insights for your moving journey
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Example Blog Post */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2">Post Title 1</h2>
              <p className="text-gray-700 mb-4">
                A brief description of the blog post goes here. This should provide a summary of the content.
              </p>
              <Link to="/blog/post-1">
                <Button className="bg-primary text-white hover:bg-primary/90">Read More</Button>
              </Link>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2">Post Title 2</h2>
              <p className="text-gray-700 mb-4">
                A brief description of the blog post goes here. This should provide a summary of the content.
              </p>
              <Link to="/blog/post-2">
                <Button className="bg-primary text-white hover:bg-primary/90">Read More</Button>
              </Link>
            </div>
            {/* Add more blog posts as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
