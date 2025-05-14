
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4 text-gradient">M.M</h3>
            <p className="text-gray-400 mb-4">
              Full Stack Developer & Computer Science Student specializing in building exceptional digital experiences.
            </p>
            <p className="text-gray-400 font-hand text-lg transform -rotate-3 mb-4">
              Available for freelance projects!
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Freelance', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>mayankmanchanda2005@gmail.com</li>
              <li>+91 8595673410</li>
              <li>New Delhi, India</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Profiles</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com/mayank-1007" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/mayankmanchanda2005" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://codeforces.com/profile/mayank_1007" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Codeforces
                </a>
              </li>
              <li>
                <a 
                  href="https://leetcode.com/mayank_1007/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  LeetCode
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Mayank Manchanda. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="p-3 bg-primary/20 hover:bg-primary/30 rounded-full transition-colors"
          >
            <ArrowUp className="h-6 w-6 text-primary" />
            <span className="sr-only">Scroll to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
