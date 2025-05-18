
import { ArrowUp, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Avatar } from './ui/avatar';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card text-foreground py-12 relative overflow-hidden">
      {/* Student-like doodles */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="grainy absolute inset-0"></div>
        <div className="coffee-stain absolute top-10 right-10" style={{ transform: 'scale(1.5)' }}></div>
        <div className="coffee-stain absolute bottom-20 left-20"></div>
        <div className="pencil-line absolute top-1/3 left-1/4 h-20 w-40"></div>
      </div>
    
      <div className="container relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="text-2xl font-display font-bold mb-4 text-gradient inline-block">M.M</Link>
            <p className="text-muted-foreground mb-4">
              Full Stack Developer & Computer Science Student specializing in building exceptional digital experiences.
            </p>
            <p className="text-accent font-hand text-xl transform -rotate-3 mb-4">
              Available for freelance projects!
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Projects', path: '/projects' },
                { name: 'Skills', path: '/skills' },
                { name: 'Freelance', path: '/freelance' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>mayankmanchanda2005@gmail.com</li>
              <li>+91 8595673410</li>
              <li>New Delhi, India</li>
            </ul>
            
            {/* Student-like post-it note */}
            <div className="mt-4 bg-accent/10 p-3 transform rotate-2 font-hand">
              <p className="text-accent">Call me anytime!</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h4 className="text-lg font-bold mb-4">Profiles</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com/mayank-1007" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/mayankmanchanda2005" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://codeforces.com/profile/mayank_1007" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Codeforces
                </a>
              </li>
              <li>
                <a 
                  href="https://leetcode.com/mayank_1007/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  LeetCode
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/mayank_mm05" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  X
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/mayank_mm05" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Mayank Manchanda. All rights reserved.
          </p>
          
          {/* Buy Me a Coffee Button */}
          <motion.div 
            className="fixed bottom-6 left-6 z-30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <HoverCard>
              <HoverCardTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, -3, 3, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a 
                          href="https://www.buymeacoffee.com/mayankm1007" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="block"
                          aria-label="Buy me a coffee"
                        >
                          <div className="bg-[#FFDD00] text-black p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                            {/* <Coffee className="h-8 w-8" /> */}
                            <img src="images/coffee-cup.png" alt="Coffee Cup" className=" -top-2 -right-2 w-8 h-8" />
                          </div>
                        </a>
                      </TooltipTrigger>
                      <TooltipContent side="right" className="bg-[#FFDD00] text-black border-none">
                        <span className="font-medium">Buy Me a Coffee</span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </motion.div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 p-0 overflow-hidden shadow-xl border-none">
                <div className="bg-gradient-to-r from-[#FEF7CD] to-[#FFDD00] p-4">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-white p-2 rounded-full">
                      <Coffee className="h-6 w-6 text-[#FFDD00]" />
                    </div>
                    <h4 className="text-black font-bold text-xl">Support My Work</h4>
                  </div>
                  
                  <p className="text-[#1A1F2C] text-sm mb-4">
                    If you enjoy my projects or find them useful, consider buying me a coffee! 
                    Your support helps me create more awesome content and tools.
                  </p>
                  
                  <div className="bg-white/30 p-3 rounded-md mb-4 font-hand text-lg text-[#1A1F2C] transform -rotate-2">
                    "Coding fueled by coffee and your support! ☕"
                  </div>
                  
                  <Button 
                    className="w-full bg-black text-[#FFDD00] hover:bg-black/80 font-medium"
                    onClick={() => window.open("https://www.buymeacoffee.com/mayankm1007", "_blank")}
                  >
                    <Coffee className="mr-2 h-4 w-4" />
                    Buy me a coffee
                  </Button>
                </div>
              </HoverCardContent>
            </HoverCard>
          </motion.div>
          
          <button 
            onClick={scrollToTop}
            className="p-3 bg-primary/20 hover:bg-primary/30 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-6 w-6 text-primary" />
          </button>
        </div>
      </div>
    </footer>
  );
}
