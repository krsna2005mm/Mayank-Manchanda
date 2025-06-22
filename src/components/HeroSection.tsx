
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import Astronaut3D from './Astronaut3D';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pb-16">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px]"></div>
      </div>
      
      <div className="container grid md:grid-cols-2 gap-12 mt-20 md:mt-0 relative z-10 max-w-6xl">
        <motion.div 
          className="flex flex-col justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-8 bg-primary rounded-full"></div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Full Stack Developer
              </p>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-foreground">Mayank</span>
              <br />
              <span className="text-gradient">Manchanda</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-md mb-2 leading-relaxed">
              Computer Science student at DTU specializing in modern web technologies and competitive programming.
            </p>
            
            <div className="flex items-center gap-1 mb-8 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Delhi, India • Available for opportunities</span>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a href="/projects">
              <Button className="shadow-sm">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="shadow-sm">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </a>
          </motion.div>

          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {[
              { icon: <Github className="h-5 w-5" />, label: "GitHub", href: "https://github.com/mayank-1007" },
              { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "https://linkedin.com/in/mayankmanchanda2005" },
              { icon: <Mail className="h-5 w-5" />, label: "Email", href: "mailto:mayankmanchanda2005@gmail.com" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="p-3 rounded-lg border border-border hover:border-primary/50 transition-colors duration-200"
                whileHover={{ y: -2 }}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <span className="sr-only">{item.label}</span>
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

{/*         <motion.div 
          className="relative flex items-center justify-center h-[300px] md:h-[500px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Astronaut3D />
        </motion.div> */}
      </div>
    </section>
  );
}
