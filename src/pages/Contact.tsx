import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Map from "@/components/Map";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  fromAddress: z.string().min(5, "From address is required"),
  fromCity: z.string().min(2, "From city is required"),
  fromState: z.string().min(2, "From state is required"),
  fromZip: z.string().min(5, "From ZIP code must be 5 digits"),
  toAddress: z.string().min(5, "To address is required"),
  toCity: z.string().min(2, "To city is required"),
  toState: z.string().min(2, "To state is required"),
  toZip: z.string().min(5, "To ZIP code must be 5 digits"),
  moveFromDate: z.string().min(1, "Move from date is required"),
  moveToDate: z.string().min(1, "Move to date is required"),
  referralSource: z.string().min(1, "Please select how you heard about us"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      fromAddress: "",
      fromCity: "",
      fromState: "",
      fromZip: "",
      toAddress: "",
      toCity: "",
      toState: "",
      toZip: "",
      moveFromDate: "",
      moveToDate: "",
      referralSource: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // In a real application, you would send this to your backend
      // For now, we'll just simulate sending an email
      const emailContent = `
        Name: ${values.name}
        Email: ${values.email}
        Phone: ${values.phone}
        From Address: ${values.fromAddress}
        From City: ${values.fromCity}
        From State: ${values.fromState}
        From ZIP: ${values.fromZip}
        To Address: ${values.toAddress}
        To City: ${values.toCity}
        To State: ${values.toState}
        To ZIP: ${values.toZip}
        Move From Date: ${values.moveFromDate}
        Move To Date: ${values.moveToDate}
        Referral Source: ${values.referralSource}
        Message: ${values.message}
      `;

      // Open default email client
      window.location.href = `mailto:info@liftnhaul.com?subject=Moving Quote Request&body=${encodeURIComponent(emailContent)}`;
      
      toast({
        title: "Quote Request Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your request. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&q=80")' }}>
        <div className="absolute inset-0 bg-primary/70">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg md:text-xl max-w-2xl">
                Get in touch with Pierce County's trusted moving experts. We're here to make your move stress-free.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you're planning a local move or need professional packing services, 
                our family-owned team is ready to assist you with all your moving needs in 
                Tacoma and throughout Pierce County.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-600">Tacoma, WA 98445</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">(253) 300-0156</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">info@liftnhaul.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Hours</h3>
                  <p className="text-gray-600">Monday - Sunday: 7:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Get Your Free Quote</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="Your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="fromAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Moving From (Address)</FormLabel>
                        <FormControl>
                          <Input placeholder="Street address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="fromCity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input placeholder="City" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="fromState"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <FormControl>
                          <Input placeholder="State" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="fromZip"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ZIP Code</FormLabel>
                        <FormControl>
                          <Input placeholder="ZIP code" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="toAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Moving To (Address)</FormLabel>
                        <FormControl>
                          <Input placeholder="Street address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="toCity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input placeholder="City" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="toState"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <FormControl>
                          <Input placeholder="State" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="toZip"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ZIP Code</FormLabel>
                        <FormControl>
                          <Input placeholder="ZIP code" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="moveFromDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Move Start Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="moveToDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Move End Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="referralSource"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How did you hear about us?</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a source" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="google">Google Search</SelectItem>
                          <SelectItem value="facebook">Facebook</SelectItem>
                          <SelectItem value="instagram">Instagram</SelectItem>
                          <SelectItem value="yelp">Yelp</SelectItem>
                          <SelectItem value="referral">Friend/Family Referral</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Details</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please provide any additional details about your move" 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">Get Free Quote</Button>
              </form>
            </Form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Service Area</h2>
          <p className="text-gray-600 mb-8">
            We proudly serve Tacoma and the surrounding Pierce County area, providing professional 
            moving services to both residential and commercial customers.
          </p>
          <div className="h-[400px] rounded-lg overflow-hidden">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;