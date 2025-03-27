import { resumeData } from "@/lib/resumeData";
import { useEffect, useRef } from "react";

export default function ExperienceSection() {
  const { experience } = resumeData;
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
    <section id="experience" ref={sectionRef} className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 after:content-[''] after:block after:w-20 after:h-1 after:bg-primary after:mt-2">
          Work Experience
        </h2>
        
        {experience.map((job, index) => (
          <div 
            key={index} 
            className={`mb-${index === experience.length - 1 ? "0" : "12"} relative experience-item opacity-0 translate-y-4 transition-all duration-500 ease-in-out`}
          >
            {index < experience.length - 1 && (
              <div className="absolute top-0 bottom-0 left-8 w-px bg-gray-200 -ml-px hidden md:block"></div>
            )}
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-[#DBEAFE] rounded-full flex items-center justify-center shadow-md hidden md:flex">
                    <i className="fas fa-building text-primary text-xl"></i>
                  </div>
                  <div className="md:ml-4">
                    <h3 className="text-xl font-semibold text-gray-800">{job.company}</h3>
                    <p className="text-gray-600">{job.period}</p>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 bg-gray-50 rounded-lg p-6 shadow-sm ml-0 md:ml-6">
                <h4 className="text-lg font-semibold text-primary">{job.title}</h4>
                <p className="text-gray-700 mt-2 mb-4">
                  {job.description}
                </p>
                <ul className="space-y-2 text-gray-700">
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <i className="fas fa-angle-right text-primary mt-1 mr-2"></i>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-[#DBEAFE] text-primary text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
