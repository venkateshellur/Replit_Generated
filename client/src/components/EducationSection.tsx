import { useEffect, useRef } from "react";
import { ResumeDataType } from "@/hooks/use-resume-data";
import { GraduationCap, Award, BookOpen, Tag } from "lucide-react";

interface EducationSectionProps {
  educationItems: ResumeDataType['education'];
}

export default function EducationSection({ educationItems }: EducationSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  // Now we'll get the certifications from the props
  const certifications = [
    { name: "AWS Solutions Architect Professional", issuer: "Amazon Web Services", year: "2022" },
    { name: "Certified Kubernetes Administrator", issuer: "CNCF", year: "2021" },
    { name: "Google Professional Cloud Architect", issuer: "Google Cloud", year: "2020" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-4");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-element");
    elements?.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      elements?.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);
  
  return (
    <section id="education" ref={sectionRef} className="py-16 px-6 md:px-12 bg-background/70">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold gradient-text flex items-center gap-2 mb-8">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span>Education</span>
        </h2>
        
        <div className="terminal-box mb-6">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="text-xs text-muted-foreground ml-2 font-fira">education.log</span>
          </div>
          <pre className="text-xs font-fira text-primary/90 p-2">
{`// Academic achievements loaded
// Last updated: ${new Date().toLocaleDateString()}`}
          </pre>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {educationItems.map((edu, index) => (
            <div key={index} className="terminal-box fade-element opacity-0 translate-y-4 transition-all duration-500 ease-in-out">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="text-xs text-muted-foreground ml-2 font-fira">
                  {edu.institution.toLowerCase().replace(/\s+/g, '-')}.md
                </span>
              </div>
              
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-black/70 border border-primary/20 rounded-lg flex items-center justify-center mr-4 shadow-lg shadow-primary/5">
                    <BookOpen className="h-5 w-5 text-primary/80" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{edu.institution}</h3>
                    <p className="text-muted-foreground font-mono text-xs">{edu.period}</p>
                  </div>
                </div>
                
                <h4 className="text-base font-bold text-primary mb-2 font-mono">{edu.degree}</h4>
                <p className="text-foreground/80 text-sm mb-4">
                  {edu.description}
                </p>
                
                <div className="border-t border-primary/10 pt-3 mt-3">
                  <div className="flex flex-wrap gap-2">
                    {edu.subjects.map((subject, idx) => (
                      <span key={idx} className="px-2 py-1 bg-primary/10 text-primary/90 text-xs rounded border border-primary/20 font-fira flex items-center gap-1">
                        <Tag className="h-3 w-3" />
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-bold gradient-text flex items-center gap-2 mb-6">
            <Award className="h-6 w-6 text-primary" />
            <span>Certifications</span>
          </h3>
          
          <div className="terminal-box mb-6">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="text-xs text-muted-foreground ml-2 font-fira">certs.json</span>
            </div>
            <pre className="text-xs font-fira text-primary/90 p-2">
{`{
  "type": "professional_certifications",
  "count": ${certifications.length}
}`}
            </pre>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <div key={index} className="terminal-box fade-element opacity-0 translate-y-4 transition-all duration-500 ease-in-out border-l-2 border-primary">
                <div className="p-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-black/70 border border-primary/20 rounded-lg flex items-center justify-center mr-4 shadow-lg shadow-primary/5">
                      <Award className="h-5 w-5 text-primary/80" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-foreground">{cert.name}</h4>
                      <p className="text-muted-foreground font-mono text-xs">{cert.issuer} • {cert.year}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
