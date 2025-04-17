
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { reviews } from "@/data/reviews";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const TestimonialsSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">What Our Customers Say</h2>
          <p className="mt-3 text-base md:text-xl text-gray-600">
            Real experiences from our Google Reviews
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {reviews.map((review) => (
                <CarouselItem key={review.id} className="pl-4 sm:pl-6 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full border-2 border-[#ffd700]">
                    <div className="mb-2 md:mb-4">
                      <h3 className="font-semibold text-gray-900">{review.name}</h3>
                      <p className="text-xs md:text-sm text-gray-600">
                        {review.time}
                      </p>
                    </div>
                    <div className="flex mb-2 md:mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">{review.text}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {!isMobile && (
              <>
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden md:block">
                  <CarouselPrevious className="relative left-0" />
                </div>
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden md:block">
                  <CarouselNext className="relative right-0" />
                </div>
              </>
            )}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

