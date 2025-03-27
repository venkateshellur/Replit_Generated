import { useEffect, useRef } from "react";
import { ResumeDataType } from "@/hooks/use-resume-data";

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
            const skillBars = entry.target.querySelectorAll(".skill-bar");
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
    <section id="skills" ref={sectionRef} className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 after:content-[''] after:block after:w-20 after:h-1 after:bg-primary after:mt-2">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Programming Languages</h3>
            
            {skills.programmingLanguages.map((skill, index) => (
              <div key={index} className="mb-4 fade-in">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-gray-600">{skill.level}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-primary h-2.5 rounded-full skill-bar" 
                    data-width={skill.percentage}
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
            ))}
            
            <h3 className="text-xl font-semibold text-gray-800 mb-6 mt-12">Databases</h3>
            
            {skills.databases.map((skill, index) => (
              <div key={index} className="mb-4 fade-in">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-gray-600">{skill.level}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-primary h-2.5 rounded-full skill-bar" 
                    data-width={skill.percentage}
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Cloud & DevOps</h3>
            
            {skills.cloudDevOps.map((skill, index) => (
              <div key={index} className="mb-4 fade-in">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-gray-600">{skill.level}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-primary h-2.5 rounded-full skill-bar" 
                    data-width={skill.percentage}
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
            ))}
            
            <h3 className="text-xl font-semibold text-gray-800 mb-6 mt-12">Architecture</h3>
            
            {skills.architecture.map((skill, index) => (
              <div key={index} className="mb-4 fade-in">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-gray-600">{skill.level}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-primary h-2.5 rounded-full skill-bar" 
                    data-width={skill.percentage}
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
