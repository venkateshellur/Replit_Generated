import { ResumeDataType } from "@/hooks/use-resume-data";
import { Code, User, Briefcase, GraduationCap, Boxes, FolderKanban, MessageSquare } from "lucide-react";

interface SidebarProps {
  personalInfo: ResumeDataType['personalInfo'];
  socialLinks: ResumeDataType['socialLinks'];
}

export default function Sidebar({ personalInfo, socialLinks }: SidebarProps) {
  
  return (
    <aside className="lg:fixed lg:w-72 lg:h-screen bg-zinc-900 border-r border-zinc-800 shadow-lg z-10 hidden lg:block">
      <div className="flex flex-col h-full">
        <div className="terminal-box m-4 mb-6">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="text-xs text-zinc-400 ml-2 font-fira">profile.tsx</span>
          </div>
          <div className="p-4 text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden border-2 border-zinc-700 bg-zinc-800 flex items-center justify-center">
              <Code className="w-16 h-16 text-primary" strokeWidth={1.5} />
            </div>
            <h1 className="text-2xl font-bold gradient-text mb-1">{personalInfo.name}</h1>
            <p className="text-zinc-400 font-mono text-sm">{personalInfo.title}</p>
          </div>
        </div>
        
        <div className="terminal-box mx-4 mb-4">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="text-xs text-zinc-400 ml-2 font-fira">navigation.tsx</span>
          </div>
          <nav className="p-3">
            <div className="font-mono text-xs text-zinc-300 pl-5 relative mb-1">
              <span className="absolute left-0 text-primary font-bold">&gt;</span>
              navigation.map(section =&gt; (
            </div>
            <ul className="space-y-2 pl-4">
              <li>
                <a href="#about" className="command-line text-sm flex items-center p-1.5 rounded hover:bg-zinc-800 text-zinc-300 hover:text-primary transition-colors">
                  <User className="w-4 h-4 mr-2" />
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="#experience" className="command-line text-sm flex items-center p-1.5 rounded hover:bg-zinc-800 text-zinc-300 hover:text-primary transition-colors">
                  <Briefcase className="w-4 h-4 mr-2" />
                  <span>Experience</span>
                </a>
              </li>
              <li>
                <a href="#education" className="command-line text-sm flex items-center p-1.5 rounded hover:bg-zinc-800 text-zinc-300 hover:text-primary transition-colors">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  <span>Education</span>
                </a>
              </li>
              <li>
                <a href="#skills" className="command-line text-sm flex items-center p-1.5 rounded hover:bg-zinc-800 text-zinc-300 hover:text-primary transition-colors">
                  <Boxes className="w-4 h-4 mr-2" />
                  <span>Skills</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="command-line text-sm flex items-center p-1.5 rounded hover:bg-zinc-800 text-zinc-300 hover:text-primary transition-colors">
                  <FolderKanban className="w-4 h-4 mr-2" />
                  <span>Projects</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="command-line text-sm flex items-center p-1.5 rounded hover:bg-zinc-800 text-zinc-300 hover:text-primary transition-colors">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
            <div className="font-mono text-xs text-zinc-300 pl-5 relative mt-1">
              <span className="absolute left-0 text-primary font-bold">&gt;</span>
              ))
            </div>
          </nav>
        </div>
        
        <div className="terminal-box mx-4 mt-auto mb-4">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="text-xs text-zinc-400 ml-2 font-fira">social.tsx</span>
          </div>
          <div className="p-3">
            <div className="font-mono text-xs text-zinc-300 pl-5 relative mb-2">
              <span className="absolute left-0 text-primary font-bold">&gt;</span>
              connect.social()
            </div>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  className="text-zinc-400 hover:text-primary transition-colors" 
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
      </div>
    </aside>
  );
}
