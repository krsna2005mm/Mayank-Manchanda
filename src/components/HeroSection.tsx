
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Github, Linkedin, Mail, Code, Gamepad2 } from 'lucide-react';
import Astronaut3D from './Astronaut3D';
import GitHubStats from './GitHubStats';
import FreelanceBadge from './FreelanceBadge';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center hero-gradient pb-16">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-40 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
        
        {/* Cyber grid background */}
        <div className="absolute inset-0 bg-neon-grid bg-[length:50px_50px] opacity-20"></div>
        
        {/* Random circuit-like patterns */}
        <div className="absolute top-[15%] right-[20%] opacity-20">
          <svg width="120" height="120" viewBox="0 0 100 100" className="text-primary">
            <path d="M10,10 Q30,50 10,90 M90,10 Q70,50 90,90 M10,50 L90,50 M50,10 L50,90" 
              stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="10" cy="10" r="3" fill="currentColor" />
            <circle cx="90" cy="10" r="3" fill="currentColor" />
            <circle cx="10" cy="90" r="3" fill="currentColor" />
            <circle cx="90" cy="90" r="3" fill="currentColor" />
            <circle cx="50" cy="50" r="5" fill="currentColor" />
          </svg>
        </div>
        
        <div className="absolute bottom-[25%] left-[15%] opacity-20">
          <svg width="100" height="100" viewBox="0 0 100 100" className="text-secondary">
            <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M20,20 L80,80 M20,80 L80,20" stroke="currentColor" strokeDasharray="5,5" strokeWidth="1" />
            <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>
      
      <div className="container grid md:grid-cols-2 gap-8 mt-20 md:mt-0 relative z-10">
        <motion.div 
          className="flex flex-col justify-center order-2 md:order-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="flex items-center mb-3">
              <p className="text-lg text-primary/80 font-gaming tracking-wider">
                INITIALIZING...
              </p>
              <motion.div 
                className="ml-2 w-2 h-2 bg-primary rounded-full"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-gaming font-bold mb-6 relative tracking-tight">
              <motion.span 
                className="text-gradient inline-block"
                animate={{ 
                  textShadow: [
                    "0 0 5px rgba(66, 240, 233, 0.7)",
                    "0 0 15px rgba(66, 240, 233, 0.5)",
                    "0 0 5px rgba(66, 240, 233, 0.7)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                MAYANK
              </motion.span>{" "}
              <span className="text-foreground">MANCHANDA</span>
              
              <motion.div
                className="absolute -top-6 right-10 transform rotate-12 opacity-70"
                animate={{ rotate: [12, 15, 12] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Gamepad2 className="h-8 w-8 text-accent" />
              </motion.div>
            </h1>
            
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="h-px w-10 bg-primary mr-3" />
              <p className="text-xl md:text-2xl mb-3 font-gaming text-secondary tracking-widest">
                FULL_STACK_DEV.exe
              </p>
            </motion.div>
            
            {/* Added FreelanceBadge here */}
            <div className="mb-4">
              <FreelanceBadge />
            </div>
            
            <p className="text-muted-foreground max-w-md mb-6 border-l-2 border-primary/50 pl-3">
              Building innovative web applications with modern technologies. Currently studying Computer Science at Delhi Technological University - Third Year.
            </p>
            
            {/* Added GitHub stats */}
            {/* <div className="mb-8 flex items-center">
              <GitHubStats username="mayank-1007" repo="cyber-portfolio" />
            </div> */}
            
            {/* Binary code overlay */}
            <div className="absolute -left-10 top-1/3 opacity-10 text-primary font-mono text-xs">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i}>
                  {Array.from({ length: 20 }).map((_, j) => 
                    Math.random() > 0.5 ? '1' : '0'
                  ).join(' ')}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a href="/projects">
              <Button className="bg-cyber-gradient hover:opacity-90 transition-opacity font-gaming animate-glow-pulse">
                EXPLORE PROJECTS
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-primary hover:bg-primary/10 font-gaming group">
                DOWNLOAD CV
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Download className="ml-2 h-4 w-4 group-hover:text-primary" />
                </motion.div>
              </Button>
            </a>
          </motion.div>

          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {[
              { icon: <Github className="h-6 w-6" />, label: "GitHub", href: "https://github.com/mayank-1007" },
              { icon: <Linkedin className="h-6 w-6" />, label: "LinkedIn", href: "https://linkedin.com/in/mayankmanchanda2005" },
              { icon: <Mail className="h-6 w-6" />, label: "Email", href: "mailto:mayankmanchanda2005@gmail.com" },
              { icon: <Code className="h-6 w-6" />, label: "Projects", href: "/projects" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="relative p-2 rounded-md bg-card border border-border hover:border-primary transition-colors"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 10px rgba(66, 240, 233, 0.5)"
                }}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <span className="sr-only">{item.label}</span>
                {item.icon}
                
                <motion.span 
                  className="absolute -top-2 -right-2 w-2 h-2 rounded-full bg-primary"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, delay: index * 0.5, repeat: Infinity }}
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative order-1 md:order-2 flex items-center justify-center h-[300px] md:h-[500px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Astronaut3D />
        </motion.div>
      </div>
    </section>
  );
}
