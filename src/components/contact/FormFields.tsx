import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "./types";

interface FormFieldsProps {
  form: UseFormReturn<FormValues>;
  webhookUrl: string;
  setWebhookUrl: (url: string) => void;
}

export const FormFields = ({ form, webhookUrl, setWebhookUrl }: FormFieldsProps) => {
  return (
    <>
      {process.env.NODE_ENV === 'development' && (
        <FormItem>
          <FormLabel>N8N Webhook URL (Development Only)</FormLabel>
          <FormControl>
            <Input
              placeholder="Enter your N8N webhook URL"
              value={webhookUrl}
              onChange={(e) => setWebhookUrl(e.target.value)}
            />
          </FormControl>
        </FormItem>
      )}

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
          name="moveSize"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Move Size</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select move size" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="studio">Studio</SelectItem>
                  <SelectItem value="1bedroom">1 Bedroom</SelectItem>
                  <SelectItem value="2bedroom">2 Bedrooms</SelectItem>
                  <SelectItem value="3bedroom">3 Bedrooms</SelectItem>
                  <SelectItem value="4bedroom">4 Bedrooms</SelectItem>
                  <SelectItem value="5bedroom">5 Bedrooms</SelectItem>
                  <SelectItem value="6bedroom">6 Bedrooms</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
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
                <SelectItem value="angis">Angi's List</SelectItem>
                <SelectItem value="thumbtack">Thumbtack</SelectItem>
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
    </>
  );
};