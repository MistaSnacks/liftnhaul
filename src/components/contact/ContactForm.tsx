import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { ContactFormFields } from "./ContactFormFields";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  moveFromDate: z.string().min(1, "Move from date is required"),
  moveSize: z.string().min(1, "Move size is required"),
  referralSource: z.string().min(1, "Please select how you heard about us"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      moveFromDate: "",
      moveSize: "",
      referralSource: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Initialize EmailJS with your public key
      emailjs.init("YOUR_PUBLIC_KEY");

      await emailjs.send(
        "YOUR_SERVICE_ID", // Email JS service ID
        "YOUR_TEMPLATE_ID", // Email JS template ID
        {
          to_email: "info@liftnhaul.com",
          from_name: values.name,
          from_email: values.email,
          phone: values.phone,
          move_date: values.moveFromDate,
          move_size: values.moveSize,
          referral_source: values.referralSource,
          message: values.message,
        }
      );
      
      toast({
        title: "Quote Request Submitted",
        description: "Thank you! Our team will contact you shortly to discuss your move.",
        className: "bg-primary text-primary-foreground border-2 border-secondary animate-fade-in",
      });
      
      form.reset();
    } catch (error) {
      console.error('Error sending form:', error);
      toast({
        title: "Error",
        description: "There was an error sending your request. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Get Your Free Quote</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <ContactFormFields form={form} />
          <Button type="submit" className="w-full">Get Free Quote</Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;