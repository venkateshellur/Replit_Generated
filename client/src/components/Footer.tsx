import { resumeData } from "@/lib/resumeData";

export default function Footer() {
  const { personalInfo, socialLinks } = resumeData;
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">{personalInfo.name}</h3>
            <p className="text-gray-400">{personalInfo.title}</p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                className="text-gray-400 hover:text-white transition duration-200" 
                aria-label={link.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`fab fa-${link.icon} text-xl`}></i>
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
