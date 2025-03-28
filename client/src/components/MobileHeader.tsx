import { ResumeDataType } from "@/hooks/use-resume-data";

interface MobileHeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  personalInfo: ResumeDataType['personalInfo'];
}

export default function MobileHeader({ isMenuOpen, toggleMenu, closeMenu, personalInfo }: MobileHeaderProps) {
  // Hardcoded social links for mobile header to simplify
  const socialLinks = [
    { name: "GitHub", url: "https://github.com", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
    { name: "Twitter", url: "https://twitter.com", icon: "twitter" }
  ];
  
  return (
    <header className="lg:hidden bg-background/95 backdrop-blur-sm border-b border-zinc-800 sticky top-0 z-50">
      <div className="terminal-box m-2">
        <div className="terminal-header">
          <div className="terminal-dot bg-red-500"></div>
          <div className="terminal-dot bg-yellow-500"></div>
          <div className="terminal-dot bg-green-500"></div>
          <span className="text-xs text-zinc-400 ml-2 font-fira">header.tsx</span>
        </div>
        <div className="p-2 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-zinc-900 border border-primary/20 rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-primary text-sm font-mono">{`{}`}</span>
            </div>
            <div>
              <h1 className="text-sm font-bold font-mono text-zinc-200">{personalInfo.name}</h1>
              <p className="text-xs font-mono text-zinc-400">{personalInfo.title}</p>
            </div>
          </div>
          <button 
            onClick={toggleMenu}
            className="text-zinc-400 hover:text-primary focus:outline-none transition-colors" 
            aria-label="Menu"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
          </button>
        </div>
      </div>
      
      <nav className={`${isMenuOpen ? 'block' : 'hidden'} bg-background pb-4 px-2`}>
        <div className="terminal-box mb-2">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="text-xs text-zinc-400 ml-2 font-fira">nav.tsx</span>
          </div>
          <ul className="py-1 px-2 space-y-1">
            <li>
              <a 
                href="#about" 
                onClick={closeMenu}
                className="font-mono text-xs text-zinc-300 pl-5 relative block py-1 hover:text-primary transition-colors"
              >
                <span className="absolute left-0 text-primary font-bold">&gt;</span>
                cd /about
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                onClick={closeMenu}
                className="font-mono text-xs text-zinc-300 pl-5 relative block py-1 hover:text-primary transition-colors"
              >
                <span className="absolute left-0 text-primary font-bold">&gt;</span>
                cd /experience
              </a>
            </li>
            <li>
              <a 
                href="#education" 
                onClick={closeMenu}
                className="font-mono text-xs text-zinc-300 pl-5 relative block py-1 hover:text-primary transition-colors"
              >
                <span className="absolute left-0 text-primary font-bold">&gt;</span>
                cd /education
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                onClick={closeMenu}
                className="font-mono text-xs text-zinc-300 pl-5 relative block py-1 hover:text-primary transition-colors"
              >
                <span className="absolute left-0 text-primary font-bold">&gt;</span>
                cd /skills
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                onClick={closeMenu}
                className="font-mono text-xs text-zinc-300 pl-5 relative block py-1 hover:text-primary transition-colors"
              >
                <span className="absolute left-0 text-primary font-bold">&gt;</span>
                cd /projects
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={closeMenu}
                className="font-mono text-xs text-zinc-300 pl-5 relative block py-1 hover:text-primary transition-colors"
              >
                <span className="absolute left-0 text-primary font-bold">&gt;</span>
                cd /contact
              </a>
            </li>
          </ul>
        </div>
        
        <div className="terminal-box">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="text-xs text-zinc-400 ml-2 font-fira">social.tsx</span>
          </div>
          <div className="py-2 px-4">
            <div className="font-mono text-xs text-zinc-300 pl-5 relative mb-2">
              <span className="absolute left-0 text-primary font-bold">&gt;</span>
              connect.social()
            </div>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  className="text-zinc-400 hover:text-primary transition-colors" 
                  aria-label={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fab fa-${link.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
