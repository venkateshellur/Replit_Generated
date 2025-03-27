import { useEffect, useRef } from "react";
import { ResumeDataType } from "@/hooks/use-resume-data";
import { FolderGit2, Code, ExternalLink, GitBranch } from "lucide-react";

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
    <section id="projects" ref={sectionRef} className="py-16 px-6 md:px-12 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold gradient-text flex items-center gap-2 mb-8">
          <FolderGit2 className="h-8 w-8 text-primary" />
          <span>Selected Projects</span>
        </h2>
        
        <div className="terminal-box mb-6">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="text-xs text-muted-foreground ml-2 font-fira">projects.git</span>
          </div>
          <pre className="text-xs font-fira text-primary/90 p-2">
{`$ git status
On branch main
Your branch is up to date with 'origin/main'.

${projects.length} repositories in total.
Last commit: ${new Date().toLocaleDateString()}`}
          </pre>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="terminal-box overflow-hidden project-item opacity-0 translate-y-4 transition-all duration-500 ease-in-out border border-primary/20">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="text-xs text-primary/80 ml-2 font-fira flex items-center gap-1">
                  <GitBranch className="h-3 w-3" />
                  {project.name.toLowerCase().replace(/\s+/g, '-')}.git
                </span>
              </div>
              
              <div className="h-28 bg-black/60 relative border-y border-primary/10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/20 flex items-center justify-center">
                  <h3 className="text-xl font-bold font-mono text-primary/90 p-4 text-center">
                    {project.name}
                  </h3>
                </div>
                <div className="absolute top-2 right-2 text-xs font-mono text-primary/50">
                  <span className="mr-1">v1.0.0</span>
                  <span className="px-1 py-0.5 rounded bg-primary/10 border border-primary/20">stable</span>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-foreground/80 mb-4 text-sm font-fira">
                  {project.description}
                </p>
                
                <div className="border-t border-primary/10 pt-3 mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-primary/10 text-primary/90 text-xs rounded border border-primary/20 font-fira flex items-center gap-1">
                        <Code className="h-3 w-3" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a 
                  href={project.url} 
                  className="inline-flex items-center font-mono text-primary hover:text-primary/90 transition-colors text-sm group"
                >
                  <span>View Repository</span>
                  <ExternalLink className="ml-2 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
