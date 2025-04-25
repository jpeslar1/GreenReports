import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <section className="py-16 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Contact Us</h2>
          
          {/* Simple HTML form for formsubmit.co compatibility */}
          <form 
            action="https://formsubmit.co/contact@greenreports.co" 
            method="POST" 
            className="space-y-6"
            onSubmit={() => setIsSubmitting(true)}
          >
            {/* Honeypot to prevent spam */}
            <input type="text" name="_honey" style={{ display: 'none' }} />
            
            {/* Disable captcha */}
            <input type="hidden" name="_captcha" value="false" />
            
            {/* Success page - redirect back to the same page */}
            <input type="hidden" name="_next" value={window.location.href} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input 
                  type="text" 
                  name="name" 
                  placeholder="Your Full Name" 
                  required 
                  className="w-full"
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  required 
                  className="w-full"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input 
                  type="tel" 
                  name="phone" 
                  placeholder="Your Phone" 
                  className="w-full"
                />
              </div>
              <div>
                <Input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  required 
                  className="w-full"
                />
              </div>
            </div>
            
            <div>
              <Textarea 
                name="message" 
                placeholder="What can we help?" 
                rows={4} 
                required 
                className="w-full"
              />
            </div>
            
            <Button 
              type="submit" 
              className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 h-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}