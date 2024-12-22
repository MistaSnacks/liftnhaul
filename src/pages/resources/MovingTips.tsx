import { Helmet } from "react-helmet";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const MovingTips = () => {
  return (
    <>
      <Helmet>
        <title>Essential Moving Tips & Advice | LiftNHaul Tacoma</title>
        <meta name="description" content="Get expert moving tips and advice for a stress-free relocation to Tacoma. Learn about planning, organizing, and executing your move efficiently." />
        <meta name="keywords" content="moving tips, relocation advice, moving checklist, moving organization, Tacoma moving" />
      </Helmet>

      <div className="container mx-auto px-4 py-24 mt-16">
        <h1 className="text-4xl font-bold text-center mb-8">Essential Moving Tips</h1>
        <p className="text-lg text-center text-muted-foreground mb-12">
          Make your move smoother with these expert tips and advice
        </p>

        <div className="grid gap-8 max-w-3xl mx-auto">
          <Alert>
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Start Early</AlertTitle>
            <AlertDescription>
              Begin planning your move at least 8 weeks before your moving date to ensure a stress-free experience.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle>8 Weeks Before Moving</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>• Create a moving budget and timeline</p>
              <p>• Research and book moving companies</p>
              <p>• Start decluttering and organizing</p>
              <p>• Begin collecting packing supplies</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4 Weeks Before Moving</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>• Start packing non-essential items</p>
              <p>• Update your address with important contacts</p>
              <p>• Schedule utility transfers</p>
              <p>• Organize important documents</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Moving Week Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>• Pack an essentials box</p>
              <p>• Confirm details with your moving company</p>
              <p>• Clean as you pack</p>
              <p>• Label boxes clearly by room</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Moving Day Essentials</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>• Keep important documents with you</p>
              <p>• Have cash ready for tips</p>
              <p>• Take photos of valuable items</p>
              <p>• Do a final walkthrough</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default MovingTips;