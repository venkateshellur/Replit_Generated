import { resumeData } from "@/lib/resumeData";

export default function Sidebar() {
  const { personalInfo, socialLinks } = resumeData;
  
  return (
    <aside className="lg:fixed lg:w-64 lg:h-screen bg-white shadow-lg z-10 hidden lg:block">
      <div className="flex flex-col h-full">
        <div className="p-6 text-center border-b border-gray-200">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary-light">
            <svg 
              className="w-full h-full text-gray-300 bg-gray-100"
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-primary">{personalInfo.name}</h1>
          <p className="text-gray-600">{personalInfo.title}</p>
        </div>
        
        <nav className="flex-grow p-4">
          <ul className="space-y-2">
            <li>
              <a href="#about" className="flex items-center p-2 rounded hover:bg-primary-light text-gray-700 hover:text-primary transition duration-200">
                <i className="fas fa-user w-6"></i>
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#experience" className="flex items-center p-2 rounded hover:bg-primary-light text-gray-700 hover:text-primary transition duration-200">
                <i className="fas fa-briefcase w-6"></i>
                <span>Experience</span>
              </a>
            </li>
            <li>
              <a href="#education" className="flex items-center p-2 rounded hover:bg-primary-light text-gray-700 hover:text-primary transition duration-200">
                <i className="fas fa-graduation-cap w-6"></i>
                <span>Education</span>
              </a>
            </li>
            <li>
              <a href="#skills" className="flex items-center p-2 rounded hover:bg-primary-light text-gray-700 hover:text-primary transition duration-200">
                <i className="fas fa-code w-6"></i>
                <span>Skills</span>
              </a>
            </li>
            <li>
              <a href="#projects" className="flex items-center p-2 rounded hover:bg-primary-light text-gray-700 hover:text-primary transition duration-200">
                <i className="fas fa-project-diagram w-6"></i>
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="flex items-center p-2 rounded hover:bg-primary-light text-gray-700 hover:text-primary transition duration-200">
                <i className="fas fa-envelope w-6"></i>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <div className="flex justify-center space-x-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                className="text-gray-600 hover:text-primary transition duration-200" 
                aria-label={link.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`fab fa-${link.icon} text-xl`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
