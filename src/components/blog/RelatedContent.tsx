
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export interface RelatedContentItem {
  title: string;
  path: string;
  description: string;
  type: 'blog' | 'service' | 'location';
}

interface RelatedContentProps {
  items: RelatedContentItem[];
  title?: string;
}

const RelatedContent = ({ items, title = "Related Content" }: RelatedContentProps) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{item.title}</CardTitle>
              <CardDescription>
                {item.type === 'blog' && 'Blog Post'}
                {item.type === 'service' && 'Service'}
                {item.type === 'location' && 'Location'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-3">{item.description}</p>
              <Link to={item.path} className="text-sm font-medium text-primary hover:underline">
                Read More →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RelatedContent;
