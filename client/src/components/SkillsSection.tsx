import { useEffect, useRef } from "react";
import { ResumeDataType } from "@/hooks/use-resume-data";
import { Code } from "lucide-react";

interface SkillsSectionProps {
  skills: ResumeDataType['skills'];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll(".skill-bar-fill");
            skillBars.forEach((bar) => {
              const width = (bar as HTMLElement).dataset.width;
              (bar as HTMLElement).style.width = "0%";
              setTimeout(() => {
                (bar as HTMLElement).style.width = width + "%";
              }, 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-16 px-6 md:px-12 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold gradient-text flex items-center gap-2 mb-8">
          <Code className="h-8 w-8 text-primary" />
          <span>Technical Skills</span>
        </h2>
        
        <div className="terminal-box mb-8">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="text-xs text-muted-foreground ml-2 font-fira">skills.json</span>
          </div>
          
          <pre className="text-xs md:text-sm font-fira text-primary/90 overflow-x-auto">
{`{
  "developerSkills": {
    "version": "1.0.0",
    "lastUpdated": "${new Date().toISOString().split('T')[0]}"
  }
}`}
          </pre>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          <div className="space-y-8">
            <div className="terminal-box">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="text-xs text-muted-foreground ml-2 font-fira">languages.sh</span>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-fira text-primary mb-4 border-b border-primary/20 pb-2">Programming Languages</h3>
                
                {skills.programmingLanguages.map((skill, index) => (
                  <div key={index} className="fade-in">
                    <div className="flex justify-between mb-1">
                      <span className="font-fira text-sm text-foreground">{skill.name}</span>
                      <span className="font-fira text-xs text-muted-foreground">{skill.level}</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-bar-fill transition-all duration-1000 ease-out" 
                        data-width={skill.percentage}
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="terminal-box">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="text-xs text-muted-foreground ml-2 font-fira">databases.sh</span>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-fira text-primary mb-4 border-b border-primary/20 pb-2">Databases</h3>
                
                {skills.databases.map((skill, index) => (
                  <div key={index} className="fade-in">
                    <div className="flex justify-between mb-1">
                      <span className="font-fira text-sm text-foreground">{skill.name}</span>
                      <span className="font-fira text-xs text-muted-foreground">{skill.level}</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-bar-fill transition-all duration-1000 ease-out" 
                        data-width={skill.percentage}
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="terminal-box">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="text-xs text-muted-foreground ml-2 font-fira">devops.sh</span>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-fira text-primary mb-4 border-b border-primary/20 pb-2">Cloud & DevOps</h3>
                
                {skills.cloudDevOps.map((skill, index) => (
                  <div key={index} className="fade-in">
                    <div className="flex justify-between mb-1">
                      <span className="font-fira text-sm text-foreground">{skill.name}</span>
                      <span className="font-fira text-xs text-muted-foreground">{skill.level}</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-bar-fill transition-all duration-1000 ease-out" 
                        data-width={skill.percentage}
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="terminal-box">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="text-xs text-muted-foreground ml-2 font-fira">architecture.sh</span>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-fira text-primary mb-4 border-b border-primary/20 pb-2">Architecture</h3>
                
                {skills.architecture.map((skill, index) => (
                  <div key={index} className="fade-in">
                    <div className="flex justify-between mb-1">
                      <span className="font-fira text-sm text-foreground">{skill.name}</span>
                      <span className="font-fira text-xs text-muted-foreground">{skill.level}</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-bar-fill transition-all duration-1000 ease-out" 
                        data-width={skill.percentage}
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
