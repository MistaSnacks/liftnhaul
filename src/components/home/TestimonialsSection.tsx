
import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GoogleReview, getSortedReviews } from "@/data/googleReviews";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const TestimonialsSection = () => {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  
  // Setup autoplay plugin with 5 second delay and stopping on interaction
  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      align: "start",
      loop: true,
    },
    [autoplayPlugin.current]
  );
  
  // Fetch reviews on component mount
  useEffect(() => {
    const fetchReviews = () => {
      try {
        const sortedReviews = getSortedReviews();
        console.log("Fetched reviews:", sortedReviews);
        setReviews(sortedReviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    
    fetchReviews();
  }, []);
  
  // Re-enable autoplay when user stops interacting
  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('pointerUp', () => {
        autoplayPlugin.current.reset();
      });
    }
  }, [emblaApi]);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
          <p className="mt-4 text-xl text-gray-600">
            Real reviews from Google
          </p>
        </div>

        <div className="relative">
          <Carousel
            ref={emblaRef}
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[autoplayPlugin.current]}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {reviews.length > 0 ? (
                reviews.map((review) => (
                  <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                      <div className="mb-4">
                        <h3 className="font-semibold text-gray-900">{review.name}</h3>
                        <p className="text-sm text-gray-600">{review.time}</p>
                      </div>
                      <div className="flex mb-3">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700 leading-relaxed flex-grow">{review.text}</p>
                    </div>
                  </CarouselItem>
                ))
              ) : (
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col justify-center items-center">
                    <p>Loading reviews...</p>
                  </div>
                </CarouselItem>
              )}
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
