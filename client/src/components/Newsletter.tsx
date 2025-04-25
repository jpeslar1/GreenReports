import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { newsletterFormSchema } from "@/lib/ContactFormSchema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaPaperPlane } from "react-icons/fa";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

type NewsletterFormValues = {
  email: string;
};

export default function Newsletter() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: "",
    },
  });
  
  const onSubmit = async (data: NewsletterFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Using formsubmit.co for static form submission
      const formData = new FormData();
      formData.append('email', data.email);
      formData.append('_subject', 'Newsletter Subscription');
      
      const response = await fetch('https://formsubmit.co/contact@greenreports.co', {
        method: 'POST',
        body: formData
      });
      
      if (!response.ok) {
        throw new Error('Newsletter subscription failed');
      }
      
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
      });
      form.reset();
    } catch (error: unknown) {
      console.error("Error subscribing to newsletter:", error);
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Subscribe to our Newsletter</h3>
            <p className="text-gray-300">Sign up to receive news and updates.</p>
          </div>
          <div className="w-full md:w-auto">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full md:w-64 flex-1">
                      <FormControl>
                        <Input 
                          placeholder="Your Email" 
                          type="email" 
                          className="rounded-r-none border-r-0 focus:ring-offset-0" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="bg-[#99CC33] hover:bg-[#88bb22] rounded-l-none px-6 h-10"
                  disabled={isSubmitting}
                >
                  <FaPaperPlane />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
