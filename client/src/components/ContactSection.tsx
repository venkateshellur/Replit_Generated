import { useState } from "react";
import { useResumeData } from "@/hooks/use-resume-data";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { data } = useResumeData();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const personalInfo = data?.personalInfo;

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!personalInfo) {
    return null;
  }

  return (
    <section id="contact" className="py-16 px-6 md:px-12 bg-background/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold gradient-text flex items-center gap-2 mb-8">
          <MessageSquare className="h-8 w-8 text-primary" />
          <span>Contact Me</span>
        </h2>
        
        <div className="terminal-box mb-6">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="text-xs text-muted-foreground ml-2 font-fira">contact.js</span>
          </div>
          <pre className="text-xs font-fira text-primary/90 p-2">
{`// Initializing contact module
// Establishing communication channels
// Ready to receive messages`}
          </pre>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="terminal-box p-4 mb-8">
              <p className="text-foreground/90 text-sm font-fira">
                Interested in working together? Feel free to reach out through the form or using the contact information below.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="terminal-box">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-green-500"></div>
                  <span className="text-xs text-muted-foreground ml-2 font-fira">email.sh</span>
                </div>
                <div className="p-3 flex items-start">
                  <div className="w-10 h-10 bg-black/70 border border-primary/20 rounded-lg flex items-center justify-center mr-4 shadow-lg shadow-primary/5">
                    <Mail className="h-5 w-5 text-primary/80" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-foreground">Email</h4>
                    <a 
                      href={`mailto:${personalInfo.email}`} 
                      className="text-primary hover:text-primary/80 font-mono text-sm transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="terminal-box">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-green-500"></div>
                  <span className="text-xs text-muted-foreground ml-2 font-fira">phone.sh</span>
                </div>
                <div className="p-3 flex items-start">
                  <div className="w-10 h-10 bg-black/70 border border-primary/20 rounded-lg flex items-center justify-center mr-4 shadow-lg shadow-primary/5">
                    <Phone className="h-5 w-5 text-primary/80" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-foreground">Phone</h4>
                    <a 
                      href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} 
                      className="text-primary hover:text-primary/80 font-mono text-sm transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="terminal-box">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-green-500"></div>
                  <span className="text-xs text-muted-foreground ml-2 font-fira">location.sh</span>
                </div>
                <div className="p-3 flex items-start">
                  <div className="w-10 h-10 bg-black/70 border border-primary/20 rounded-lg flex items-center justify-center mr-4 shadow-lg shadow-primary/5">
                    <MapPin className="h-5 w-5 text-primary/80" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-foreground">Location</h4>
                    <p className="text-foreground/80 font-mono text-sm">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="terminal-box">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-green-500"></div>
                  <span className="text-xs text-muted-foreground ml-2 font-fira">linkedin.sh</span>
                </div>
                <div className="p-3 flex items-start">
                  <div className="w-10 h-10 bg-black/70 border border-primary/20 rounded-lg flex items-center justify-center mr-4 shadow-lg shadow-primary/5">
                    <Linkedin className="h-5 w-5 text-primary/80" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-foreground">LinkedIn</h4>
                    <a 
                      href={personalInfo.linkedin} 
                      className="text-primary hover:text-primary/80 font-mono text-sm transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {personalInfo.linkedin.replace('https://', '')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="terminal-box">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="text-xs text-muted-foreground ml-2 font-fira">message-form.jsx</span>
            </div>
            <div className="p-4">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-mono text-foreground">Name:</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            className="bg-background/40 border-primary/30 text-foreground placeholder:text-muted-foreground/50 font-mono text-sm focus-visible:ring-primary" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-mono text-foreground">Email:</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your email address" 
                            type="email"
                            className="bg-background/40 border-primary/30 text-foreground placeholder:text-muted-foreground/50 font-mono text-sm focus-visible:ring-primary" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-mono text-foreground">Subject:</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Subject of your message" 
                            className="bg-background/40 border-primary/30 text-foreground placeholder:text-muted-foreground/50 font-mono text-sm focus-visible:ring-primary" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-mono text-foreground">Message:</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message" 
                            className="bg-background/40 border-primary/30 text-foreground placeholder:text-muted-foreground/50 font-mono text-sm focus-visible:ring-primary resize-y min-h-[100px]" 
                            rows={4}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-black font-mono font-bold text-sm"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
