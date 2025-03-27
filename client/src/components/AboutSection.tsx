import { resumeData } from "@/lib/resumeData";
import { Button } from "@/components/ui/button";
import { generatePDF } from "@/lib/pdfGenerator";

export default function AboutSection() {
  const { personalInfo, expertise } = resumeData;

  const handleDownloadResume = () => {
    generatePDF();
  };
  
  return (
    <section id="about" className="relative bg-[#DBEAFE] py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 pr-0 md:pr-8">
              <h2 className="text-3xl font-bold text-primary mb-4">About Me</h2>
              <p className="text-gray-700 mb-6">
                {personalInfo.bio}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-gray-600">
                  <i className="fas fa-map-marker-alt mr-2 text-primary"></i>
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <i className="fas fa-envelope mr-2 text-primary"></i>
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <i className="fas fa-phone-alt mr-2 text-primary"></i>
                  <span>{personalInfo.phone}</span>
                </div>
              </div>
              <Button 
                onClick={handleDownloadResume}
                className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded transition duration-200"
              >
                <i className="fas fa-download mr-2"></i>
                Download Resume
              </Button>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Core Expertise</h3>
              <ul className="space-y-2">
                {expertise.map((skill, index) => (
                  <li key={index} className="flex items-start">
                    <i className="fas fa-check-circle text-[#059669] mt-1 mr-2"></i>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
