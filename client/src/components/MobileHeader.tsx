import { resumeData } from "@/lib/resumeData";

interface MobileHeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export default function MobileHeader({ isMenuOpen, toggleMenu, closeMenu }: MobileHeaderProps) {
  const { personalInfo, socialLinks } = resumeData;
  
  return (
    <header className="lg:hidden bg-white shadow-md sticky top-0 z-10">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-light">
            <svg 
              className="w-full h-full text-gray-300 bg-gray-100"
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-bold text-primary">{personalInfo.name}</h1>
            <p className="text-xs text-gray-600">{personalInfo.title}</p>
          </div>
        </div>
        <button 
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none" 
          aria-label="Menu"
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>
      <nav className={`${isMenuOpen ? 'block' : 'hidden'} bg-white pb-4`}>
        <ul className="space-y-1 px-4">
          <li>
            <a 
              href="#about" 
              onClick={closeMenu}
              className="block p-2 rounded hover:bg-primary-light text-gray-700 hover:text-primary transition duration-200"
            >
              <i className="fas fa-user mr-2"></i>About
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              onClick={closeMenu}
              className="block p-2 rounded hover:bg-primary-light text-gray-700 hover:text-primary transition duration-200"
            >
              <i className="fas fa-briefcase mr-2"></i>Experience
            </a>
          </li>
          <li>
            <a 
              href="#education" 
              onClick={closeMenu}
              className="block p-2 rounded hover:bg-primary-light text-gray-700 hover:text-primary transition duration-200"
            >
              <i className="fas fa-graduation-cap mr-2"></i>Education
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              onClick={closeMenu}
              className="block p-2 rounded hover:bg-primary-light text-gray-700 hover:text-primary transition duration-200"
            >
              <i className="fas fa-code mr-2"></i>Skills
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              onClick={closeMenu}
              className="block p-2 rounded hover:bg-primary-light text-gray-700 hover:text-primary transition duration-200"
            >
              <i className="fas fa-project-diagram mr-2"></i>Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={closeMenu}
              className="block p-2 rounded hover:bg-primary-light text-gray-700 hover:text-primary transition duration-200"
            >
              <i className="fas fa-envelope mr-2"></i>Contact
            </a>
          </li>
        </ul>
        <div className="flex justify-center space-x-6 mt-4">
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
      </nav>
    </header>
  );
}
