
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const AnimatedSphere = () => {
  const sphereRef = useRef<any>(null);
  
  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 100, 200]} scale={2.2}>
      <MeshDistortMaterial 
        color="#8B5CF6" 
        attach="material" 
        distort={0.4} 
        speed={2} 
        roughness={0.5}
      />
    </Sphere>
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
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-3">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="text-gradient">Mayank</span> Manchanda
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
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <AnimatedSphere />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              rotateSpeed={0.5}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
}
