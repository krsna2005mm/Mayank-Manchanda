import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Github, Linkedin, Mail, Pencil } from 'lucide-react';

// Creating a simplified visual element instead of the 3D sphere
const GradientSphere = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-purple-600 opacity-30 animate-pulse"></div>
      <div className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full bg-pink-500 opacity-30 animate-pulse" style={{ animationDelay: '500ms' }}></div>
      <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-blue-500 opacity-30 animate-pulse" style={{ animationDelay: '1000ms' }}></div>
      <div className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 opacity-70 animate-spin-slow"></div>
      
      {/* Student-like scribbles/doodles */}
      <div className="absolute top-[-30px] right-[-20px] transform rotate-12">
        <svg width="80" height="80" viewBox="0 0 100 100" className="text-indigo-500 opacity-70">
          <path d="M20,50 Q40,20 50,50 Q60,80 80,50" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M30,30 L40,40 L30,50" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>
      <div className="absolute bottom-[-10px] left-[-30px] transform -rotate-12">
        <svg width="60" height="60" viewBox="0 0 100 100" className="text-pink-500 opacity-70">
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>
    </div>
  );
};

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
        <div className="absolute top-40 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-40 right-10 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        {/* Student-like notebook paper lines */}
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute w-full h-[1px] bg-blue-800"
              style={{ top: `${(i + 1) * 5}%` }}
            ></div>
          ))}
        </div>
        
        {/* Random student doodles */}
        <div className="absolute top-[15%] right-[20%] opacity-10">
          <svg width="120" height="120" viewBox="0 0 100 100" className="text-indigo-800">
            <path d="M10,10 Q30,50 10,90 M90,10 Q70,50 90,90 M10,50 L90,50 M50,10 L50,90" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>
        <div className="absolute bottom-[25%] left-[15%] opacity-10">
          <svg width="100" height="100" viewBox="0 0 100 100" className="text-pink-800">
            <path d="M30,30 L70,70 M30,70 L70,30" stroke="currentColor" strokeWidth="4" fill="none" />
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" fill="none" />
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
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Hello, I'm
              </p>
              <div className="ml-2">
                <Pencil className="h-4 w-4 text-pink-500 animate-bounce" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 relative">
              <span className="text-gradient">Mayank</span> Manchanda
              <div className="absolute -top-6 right-10 transform rotate-12 opacity-70">
                <svg width="40" height="40" viewBox="0 0 100 100" className="text-yellow-500">
                  <path d="M20,50 L80,50 M50,20 L50,80" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                </svg>
              </div>
            </h1>
            <p className="text-xl md:text-2xl mb-3 text-gray-700 dark:text-gray-300">
              Full Stack Developer & CS Student
            </p>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
              Building innovative web applications with modern technologies. Currently studying Computer Science at Delhi Technological University.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a href="#projects">
              <Button className="bg-purple-gradient hover:opacity-90 transition-opacity">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-primary hover:bg-primary/10">
                Resume
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </motion.div>

          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a href="https://github.com/mayank-1007" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/mayankmanchanda2005" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:mayankmanchanda2005@gmail.com" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative order-1 md:order-2 flex items-center justify-center h-[300px] md:h-[500px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <GradientSphere />
        </motion.div>
      </div>
      
      {/* Student-like post-it note */}
      <div className="absolute bottom-10 right-10 w-[100px] h-[100px] bg-yellow-200 p-3 shadow-md transform rotate-6 hidden md:block">
        <div className="text-xs text-gray-800 font-hand">
          <p>Freelancer</p>
          <p>Available for hire!</p>
          <p>↓ Scroll down ↓</p>
        </div>
      </div>
    </section>
  );
}
