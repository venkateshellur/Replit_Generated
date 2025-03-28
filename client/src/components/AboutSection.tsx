import { Button } from "@/components/ui/button";
import { generatePDF } from "@/lib/pdfGenerator";
import { ResumeDataType } from "@/hooks/use-resume-data";
import { Download, MapPin, Mail, Phone, CheckCircle, User, Braces } from "lucide-react";

interface AboutSectionProps {
  personalInfo: ResumeDataType['personalInfo'];
}

export default function AboutSection({ personalInfo }: AboutSectionProps) {
  const handleDownloadResume = () => {
    generatePDF();
  };
  
  const greetingText = `// Hello, I'm ${personalInfo.name}\n// Senior ${personalInfo.title}\n`;
  
  return (
    <section id="about" className="relative bg-black py-20 px-6 md:px-12 z-0">
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#4f4f4f_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <div className="max-w-4xl mx-auto relative z-1">
        <div className="terminal-box mb-6">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="text-xs text-muted-foreground ml-2 font-fira">developer.js</span>
          </div>
          <pre className="text-sm font-fira text-green-400 p-3 font-bold">
            {greetingText}
          </pre>
        </div>
        
        <div className="terminal-box border border-primary/30">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="text-xs text-muted-foreground ml-2 font-fira">about.tsx</span>
          </div>
          
          <div className="p-5 space-y-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold gradient-text flex items-center gap-2 mb-4">
                  <User className="h-7 w-7 text-primary" />
                  <span>$ whoami</span>
                </h2>
                <div className="space-y-4 mb-6">
                  <p className="text-foreground/90 text-sm leading-relaxed font-fira">
                    {personalInfo.bio.split('\n').map((paragraph, idx) => (
                      <span key={idx} className="block mb-3">{paragraph}</span>
                    ))}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-foreground/80">
                  <div className="flex items-center space-x-2 bg-background/30 p-2 rounded border border-primary/10">
                    <MapPin className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm font-mono truncate">{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-background/30 p-2 rounded border border-primary/10">
                    <Mail className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm font-mono truncate">{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-background/30 p-2 rounded border border-primary/10">
                    <Phone className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm font-mono truncate">{personalInfo.phone}</span>
                  </div>
                </div>
                
                <Button 
                  onClick={handleDownloadResume}
                  className="bg-primary hover:bg-primary/90 text-black font-mono font-bold"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
              
              <div className="md:w-1/3">
                <div className="terminal-box h-full">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500"></div>
                    <div className="terminal-dot bg-yellow-500"></div>
                    <div className="terminal-dot bg-green-500"></div>
                    <span className="text-xs text-muted-foreground ml-2 font-fira">expertise.json</span>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-fira text-primary flex items-center gap-2 mb-4">
                      <Braces className="h-5 w-5" />
                      <span>Core Expertise</span>
                    </h3>
                    
                    <ul className="space-y-3">
                      {personalInfo.expertise.map((skill, index) => (
                        <li key={index} className="flex items-start group">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                          <span className="text-sm text-foreground/80 group-hover:text-foreground/100 transition-colors">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
