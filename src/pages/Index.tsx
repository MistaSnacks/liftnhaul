
import { Helmet } from "react-helmet";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import ServiceAreasSection from "@/components/home/ServiceAreasSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>LiftNHaul Movers - Professional Moving Services in Tacoma, WA</title>
        <meta name="description" content="LiftNHaul provides professional moving services in Tacoma, WA. Trusted local & long-distance moving, packing services, and apartment relocation experts serving Pierce County and beyond." />
        <meta name="keywords" content="LiftNHaul, LiftNHaul Movers, Tacoma movers, moving services tacoma, local movers pierce county, tacoma moving company, best movers in tacoma, moving company near me, affordable movers tacoma, professional movers pierce county, packing services washington, residential moving services" />
        <link rel="canonical" href="https://liftnhaul.com/" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MovingCompany",
              "name": "LiftNHaul Movers",
              "image": "https://liftnhaul.com/lovable-uploads/34967260-f376-4639-9678-fb69aa1eef1d.png",
              "url": "https://liftnhaul.com",
              "telephone": "(253) 555-0123",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1234 Moving Lane",
                "addressLocality": "Tacoma",
                "addressRegion": "WA",
                "postalCode": "98402",
                "addressCountry": "US"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Tacoma"
                },
                {
                  "@type": "County",
                  "name": "Pierce County"
                },
                {
                  "@type": "County",
                  "name": "King County"
                },
                {
                  "@type": "County",
                  "name": "Thurston County"
                },
                {
                  "@type": "County",
                  "name": "Kitsap County"
                }
              ],
              "description": "LiftNHaul provides professional moving services in Tacoma, WA. Trusted local & long-distance moving, packing services, and apartment relocation experts serving Pierce County and beyond.",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Moving Services",
                "itemListElement": [
                  {
                    "@type": "OfferCatalog",
                    "name": "Local Moving",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Residential Moving",
                          "url": "https://liftnhaul.com/services/local-moving"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Apartment Moving",
                          "url": "https://liftnhaul.com/services/apartment-moving"
                        }
                      }
                    ]
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Long Distance Moving",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Interstate Moving",
                          "url": "https://liftnhaul.com/services/long-distance-moving"
                        }
                      }
                    ]
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Additional Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Packing Services",
                          "url": "https://liftnhaul.com/services/packing-services"
                        }
                      }
                    ]
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>
      
      <HeroSection />
      <ServicesSection />
      <ServiceAreasSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Index;
