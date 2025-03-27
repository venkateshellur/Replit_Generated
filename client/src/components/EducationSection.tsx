import { resumeData } from "@/lib/resumeData";
import { useEffect, useRef } from "react";

export default function EducationSection() {
  const { education, certifications } = resumeData;
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
    <section id="education" ref={sectionRef} className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 after:content-[''] after:block after:w-20 after:h-1 after:bg-primary after:mt-2">
          Education
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 fade-element opacity-0 translate-y-4 transition-all duration-500 ease-in-out">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#DBEAFE] rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-university text-primary"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{edu.institution}</h3>
                  <p className="text-gray-600">{edu.period}</p>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-primary mb-2">{edu.degree}</h4>
              <p className="text-gray-700">
                {edu.description}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {edu.subjects.map((subject, idx) => (
                    <span key={idx} className="px-3 py-1 bg-[#DBEAFE] text-primary text-sm rounded-full">
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Certifications</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-[#059669] fade-element opacity-0 translate-y-4 transition-all duration-500 ease-in-out">
                <div className="flex items-center">
                  <div className="mr-4">
                    <i className="fas fa-certificate text-[#059669] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{cert.name}</h4>
                    <p className="text-gray-600">{cert.issuer} • {cert.year}</p>
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
