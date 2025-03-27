import { useEffect, useRef } from "react";
import { ResumeDataType } from "@/hooks/use-resume-data";
import { Terminal, Briefcase, ChevronRight, Code } from "lucide-react";

interface ExperienceSectionProps {
  experienceItems: ResumeDataType['experience'];
}

export default function ExperienceSection({ experienceItems }: ExperienceSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

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

    const experienceItems = sectionRef.current?.querySelectorAll(".experience-item");
    experienceItems?.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      experienceItems?.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);
  
  return (
    <section id="experience" ref={sectionRef} className="py-16 px-6 md:px-12 bg-black/40">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold gradient-text flex items-center gap-2 mb-8">
          <Terminal className="h-8 w-8 text-primary" />
          <span>Work Experience</span>
        </h2>
        
        <div className="terminal-box mb-6">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="text-xs text-muted-foreground ml-2 font-fira">Career.sh</span>
          </div>
          <pre className="text-xs font-fira text-primary/90 p-2">
{`#!/bin/bash
# Career history loader
# Compiled on ${new Date().toLocaleDateString()}

echo "Loading professional experience..."
`}
          </pre>
        </div>
        
        <div className="relative">
          {experienceItems.map((job, index) => (
            <div 
              key={index} 
              className={`mb-${index === experienceItems.length - 1 ? "0" : "8"} relative experience-item opacity-0 translate-y-4 transition-all duration-500 ease-in-out`}
            >
              {index < experienceItems.length - 1 && (
                <div className="absolute top-0 bottom-0 left-8 w-px bg-primary/10 -ml-px hidden md:block"></div>
              )}
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-black/70 border border-primary/20 rounded-lg flex items-center justify-center shadow-lg shadow-primary/5 hidden md:flex">
                      <Briefcase className="h-8 w-8 text-primary/80" />
                    </div>
                    <div className="md:ml-4">
                      <h3 className="text-xl font-bold text-foreground">{job.company}</h3>
                      <p className="text-muted-foreground font-mono text-sm">{job.period}</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 terminal-box ml-0 md:ml-6">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500"></div>
                    <div className="terminal-dot bg-yellow-500"></div>
                    <div className="terminal-dot bg-green-500"></div>
                    <span className="text-xs text-primary/80 ml-2 font-fira">{job.title.toLowerCase().replace(/\s+/g, '-')}.sh</span>
                  </div>
                  
                  <div className="p-3">
                    <h4 className="text-lg font-bold text-primary mb-2 font-mono">{job.title}</h4>
                    <p className="text-foreground/90 mt-2 mb-4 text-sm">
                      {job.description}
                    </p>
                    <ul className="space-y-3 text-foreground/80 border-t border-primary/10 pt-3">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start group">
                          <ChevronRight className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0 group-hover:text-primary/100" />
                          <span className="text-sm group-hover:text-foreground/90 transition-colors">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2 border-t border-primary/10 pt-3">
                      {job.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-primary/10 text-primary/90 text-xs rounded border border-primary/20 font-fira flex items-center gap-1">
                          <Code className="h-3 w-3" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
