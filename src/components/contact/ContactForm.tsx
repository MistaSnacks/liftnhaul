import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { FormFields } from "./FormFields";
import { formSchema, FormValues } from "./types";

const ContactForm = () => {
  const { toast } = useToast();
  const [webhookUrl, setWebhookUrl] = useState("https://mistasnacks.app.n8n.cloud/webhook-test/36a38fb4-8440-4bf2-a25f-79be1d29d729");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
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

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      // Send data to N8N webhook
      if (webhookUrl) {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...values,
            timestamp: new Date().toISOString(),
            source: window.location.href,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to submit form to webhook');
        }
      }
      
      toast({
        title: "Quote Request Submitted",
        description: "Thank you! Our team will contact you shortly to discuss your move.",
        className: "bg-primary text-primary-foreground border-2 border-secondary animate-fade-in",
      });
      
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Get Your Free Quote</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormFields 
            form={form}
            webhookUrl={webhookUrl}
            setWebhookUrl={setWebhookUrl}
          />
          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Get Free Quote"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;