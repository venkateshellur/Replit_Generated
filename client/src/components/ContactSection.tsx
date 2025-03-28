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
  const { resumeData, isLoading } = useResumeData();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const personalInfo = resumeData.personalInfo;

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
    <section id="contact" className="py-16 px-6 md:px-12 bg-background">
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
            <span className="text-xs text-zinc-400 ml-2 font-fira">contact.js</span>
          </div>
          <pre className="text-xs font-fira text-primary p-2">
{`// Initializing contact module
// Establishing communication channels
// Ready to receive messages`}
          </pre>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="terminal-box mb-6">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="text-xs text-zinc-400 ml-2 font-fira">readme.md</span>
              </div>
              <div className="p-3">
                <div className="font-mono text-xs text-zinc-300 pl-5 relative">
                  <span className="absolute left-0 text-primary font-bold">&gt;</span>
                  Let's connect!
                </div>
                <p className="text-xs text-zinc-400 mb-2 mt-1 pl-5">
                  Interested in working together? Feel free to reach out through the form or using the contact information below.
                </p>
                <div className="font-mono text-xs text-zinc-300 pl-5 relative">
                  <span className="absolute left-0 text-primary font-bold terminal-cursor">_</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="terminal-box">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-green-500"></div>
                  <span className="text-xs text-zinc-400 ml-2 font-fira">email.sh</span>
                </div>
                <div className="p-3 flex items-start">
                  <div className="w-10 h-10 bg-zinc-900 border border-primary/20 rounded-lg flex items-center justify-center mr-4 shadow-md">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-zinc-200">Email</h4>
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
                  <span className="text-xs text-zinc-400 ml-2 font-fira">phone.sh</span>
                </div>
                <div className="p-3 flex items-start">
                  <div className="w-10 h-10 bg-zinc-900 border border-primary/20 rounded-lg flex items-center justify-center mr-4 shadow-md">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-zinc-200">Phone</h4>
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
                  <span className="text-xs text-zinc-400 ml-2 font-fira">location.sh</span>
                </div>
                <div className="p-3 flex items-start">
                  <div className="w-10 h-10 bg-zinc-900 border border-primary/20 rounded-lg flex items-center justify-center mr-4 shadow-md">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-zinc-200">Location</h4>
                    <p className="text-zinc-400 font-mono text-sm">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="terminal-box">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-green-500"></div>
                  <span className="text-xs text-zinc-400 ml-2 font-fira">linkedin.sh</span>
                </div>
                <div className="p-3 flex items-start">
                  <div className="w-10 h-10 bg-zinc-900 border border-primary/20 rounded-lg flex items-center justify-center mr-4 shadow-md">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-zinc-200">LinkedIn</h4>
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
              <span className="text-xs text-zinc-400 ml-2 font-fira">message-form.jsx</span>
            </div>
            <div className="p-4">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-mono text-zinc-300">Name:</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            className="bg-zinc-900/80 border-zinc-700 text-zinc-300 placeholder:text-zinc-600 font-mono text-sm focus-visible:ring-primary" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-mono text-zinc-300">Email:</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your email address" 
                            type="email"
                            className="bg-zinc-900/80 border-zinc-700 text-zinc-300 placeholder:text-zinc-600 font-mono text-sm focus-visible:ring-primary" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-mono text-zinc-300">Subject:</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Subject of your message" 
                            className="bg-zinc-900/80 border-zinc-700 text-zinc-300 placeholder:text-zinc-600 font-mono text-sm focus-visible:ring-primary" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-mono text-zinc-300">Message:</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message" 
                            className="bg-zinc-900/80 border-zinc-700 text-zinc-300 placeholder:text-zinc-600 font-mono text-sm focus-visible:ring-primary resize-y min-h-[100px]" 
                            rows={4}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-400" />
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
