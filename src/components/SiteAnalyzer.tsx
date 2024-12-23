import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";

interface RouteCheck {
  path: string;
  exists: boolean;
}

export const SiteAnalyzer = () => {
  const [brokenLinks, setBrokenLinks] = useState<string[]>([]);
  const [redundantRoutes, setRedundantRoutes] = useState<string[]>([]);
  const [emptyPages, setEmptyPages] = useState<string[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const location = useLocation();
  const { toast } = useToast();

  const allRoutes = [
    "/",
    "/about",
    "/contact",
    "/services",
    "/blog",
    "/resources",
    "/services/local-moving",
    "/services/long-distance-moving",
    "/services/packing-services",
    "/services/apartment-moving",
    "/blog/moving-tips-and-tricks",
    "/blog/moving-to-tacoma-guide",
    "/blog/best-tacoma-neighborhoods",
    "/blog/seattle-living-guide",
    "/blog/bellevue-living-guide",
    "/blog/living-in-olympia-guide",
    "/blog/port-orchard-living-guide",
    "/resources/service-areas",
    "/resources/moving-tips",
    "/resources/packing-guide",
    "/resources/service-areas/king-county",
    "/resources/service-areas/pierce-county",
    "/resources/service-areas/thurston-county",
    "/resources/service-areas/kitsap-county"
  ];

  const checkLinks = async () => {
    setIsChecking(true);
    const broken: string[] = [];
    const redundant: string[] = [];
    const empty: string[] = [];

    // Check for duplicate routes
    const routePaths = allRoutes.map(route => route.toLowerCase());
    const duplicates = routePaths.filter((route, index) => routePaths.indexOf(route) !== index);
    redundant.push(...duplicates);

    // Check for broken links
    const links = document.querySelectorAll('a');
    const checkedUrls = new Set<string>();

    for (const link of links) {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('http')) continue;
      
      if (!checkedUrls.has(href)) {
        checkedUrls.add(href);
        if (!allRoutes.includes(href)) {
          broken.push(href);
        }
      }
    }

    // Check for empty pages
    const mainContent = document.querySelector('main');
    if (mainContent && mainContent.children.length === 0) {
      empty.push(location.pathname);
    }

    setBrokenLinks(broken);
    setRedundantRoutes(redundant);
    setEmptyPages(empty);
    setIsChecking(false);

    toast({
      title: "Analysis Complete",
      description: `Found ${broken.length} broken links, ${redundant.length} redundant routes, and ${empty.length} empty pages`,
      duration: 5000,
    });
  };

  useEffect(() => {
    // Run check when route changes
    checkLinks();
  }, [location.pathname]);

  return (
    <Card className="w-full max-w-2xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>Site Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <Button 
          onClick={checkLinks} 
          disabled={isChecking}
          className="mb-4"
        >
          {isChecking ? "Checking..." : "Check for Issues"}
        </Button>

        {brokenLinks.length > 0 && (
          <Alert className="mb-4">
            <AlertDescription>
              <h3 className="font-semibold mb-2">Broken Links Found:</h3>
              <ul className="list-disc pl-4">
                {brokenLinks.map((link, index) => (
                  <li key={index} className="text-red-600">{link}</li>
                ))}
              </ul>
            </AlertDescription>
          </Alert>
        )}

        {redundantRoutes.length > 0 && (
          <Alert className="mb-4">
            <AlertDescription>
              <h3 className="font-semibold mb-2">Redundant Routes Found:</h3>
              <ul className="list-disc pl-4">
                {redundantRoutes.map((route, index) => (
                  <li key={index} className="text-yellow-600">{route}</li>
                ))}
              </ul>
            </AlertDescription>
          </Alert>
        )}

        {emptyPages.length > 0 && (
          <Alert className="mb-4">
            <AlertDescription>
              <h3 className="font-semibold mb-2">Empty Pages Found:</h3>
              <ul className="list-disc pl-4">
                {emptyPages.map((page, index) => (
                  <li key={index} className="text-orange-600">{page}</li>
                ))}
              </ul>
            </AlertDescription>
          </Alert>
        )}

        {brokenLinks.length === 0 && redundantRoutes.length === 0 && emptyPages.length === 0 && !isChecking && (
          <Alert>
            <AlertDescription className="text-green-600">
              No issues found! All links are valid, no redundant routes detected, and no empty pages found.
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
};