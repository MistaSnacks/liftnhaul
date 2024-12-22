import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Tacoma, WA",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      text: "The team made our local move completely stress-free. They handled our furniture with care and were incredibly professional throughout the entire process. Highly recommend!",
      rating: 5
    },
    {
      name: "Michael Chen",
      location: "Lakewood, WA",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      text: "Their packing service was a lifesaver! They carefully packed all our belongings and labeled everything clearly. The unpacking was just as organized. Worth every penny.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      location: "University Place, WA",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      text: "Moving from my apartment was seamless. The crew was punctual, efficient, and took extra care with my furniture. They made the whole process so much easier!",
      rating: 5
    },
    {
      name: "David Thompson",
      location: "Gig Harbor, WA",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      text: "Outstanding service from start to finish. The team was professional, courteous, and handled our long-distance move with expertise. Everything arrived in perfect condition.",
      rating: 5
    },
    {
      name: "Lisa Martinez",
      location: "Puyallup, WA",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      text: "I was impressed by their attention to detail during our local move. They wrapped all furniture carefully and were very efficient. Great communication throughout!",
      rating: 5
    },
    {
      name: "James Wilson",
      location: "Federal Way, WA",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      text: "The packing and moving service exceeded my expectations. They were thorough, professional, and made our move stress-free. Would definitely use them again!",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
          <p className="mt-4 text-xl text-gray-600">
            Real experiences from satisfied customers
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -left-4 top-1/2 -translate-y-1/2">
              <CarouselPrevious className="relative left-0" />
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2">
              <CarouselNext className="relative right-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;