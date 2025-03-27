import { useEffect, useRef } from "react";
import { ResumeDataType } from "@/hooks/use-resume-data";

interface ProjectsSectionProps {
  projects: ResumeDataType['projects'];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
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

    const projectItems = sectionRef.current?.querySelectorAll(".project-item");
    projectItems?.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      projectItems?.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);
  
  return (
    <section id="projects" ref={sectionRef} className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 after:content-[''] after:block after:w-20 after:h-1 after:bg-primary after:mt-2">
          Selected Projects
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden project-item opacity-0 translate-y-4 transition-all duration-500 ease-in-out">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-xl font-bold text-white p-4">{project.name}</h3>
                </div>
                {/* Using a placeholder gradient instead of a real image */}
                <div className="w-full h-full bg-gradient-to-br from-primary/40 to-primary/90"></div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-[#DBEAFE] text-primary text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.url} className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition duration-200">
                  <span>View case study</span>
                  <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
