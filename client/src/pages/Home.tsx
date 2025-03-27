import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useResumeData } from "@/hooks/use-resume-data";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { resumeData, isLoading, isError } = useResumeData();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="hidden lg:block w-64 fixed inset-y-0 bg-gray-900">
          <Skeleton className="h-full w-full" />
        </div>
        <main className="flex-grow lg:ml-64 p-6">
          <div className="space-y-10">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-10 w-[250px]" />
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center p-6 bg-red-50 rounded-lg max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-red-700 mb-4">Error Loading Data</h2>
          <p className="text-red-600 mb-6">
            There was a problem loading the resume data. Please try refreshing the page.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Sidebar 
        personalInfo={resumeData.personalInfo} 
        socialLinks={resumeData.socialLinks} 
      />
      <MobileHeader 
        isMenuOpen={isMenuOpen} 
        toggleMenu={toggleMenu} 
        closeMenu={closeMenu} 
        personalInfo={resumeData.personalInfo}
      />
      
      <main className="flex-grow lg:ml-64">
        <AboutSection personalInfo={resumeData.personalInfo} />
        <ExperienceSection experienceItems={resumeData.experience} />
        <EducationSection educationItems={resumeData.education} />
        <SkillsSection skills={resumeData.skills} />
        <ProjectsSection projects={resumeData.projects} />
        <ContactSection />
        <Footer socialLinks={resumeData.socialLinks} />
      </main>
    </div>
  );
}
