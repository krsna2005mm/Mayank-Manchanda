
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

interface Astronaut3DProps {
  className?: string;
}

const Astronaut3D: React.FC<Astronaut3DProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full h-full flex items-center justify-center ${className}`}
    >
      {/* Main astronaut container with 3D perspective */}
      <div className="relative w-[300px] h-[400px] perspective-[1000px] transform-gpu">
        <motion.div
          className="absolute inset-0"
          animate={{ 
            rotateY: [0, 10, 0, -10, 0],
            rotateX: [0, 5, 0, -5, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Astronaut Body */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Spacesuit */}
            <motion.div 
              className="relative w-48 h-64 bg-gradient-to-b from-card to-muted rounded-3xl border border-primary/30"
              animate={{ 
                boxShadow: [
                  "0 0 10px rgba(66, 240, 233, 0.3)",
                  "0 0 20px rgba(66, 240, 233, 0.5)",
                  "0 0 10px rgba(66, 240, 233, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}
            >
              {/* Helmet Visor */}
              <motion.div 
                className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/20 backdrop-blur-sm rounded-full border border-primary/40"
                animate={{ 
                  background: [
                    "linear-gradient(135deg, rgba(66, 240, 233, 0.1), rgba(124, 77, 255, 0.2))",
                    "linear-gradient(135deg, rgba(124, 77, 255, 0.1), rgba(66, 240, 233, 0.2))",
                    "linear-gradient(135deg, rgba(66, 240, 233, 0.1), rgba(124, 77, 255, 0.2))"
                  ]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                {/* Face placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="text-4xl text-primary font-gaming"
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    M
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Suit details - chest panel */}
              <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-card border border-primary/40 rounded-lg flex flex-col items-center justify-center">
                <motion.div 
                  className="w-16 h-2 bg-primary/60 rounded-full mb-2"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="flex space-x-2">
                  <motion.div 
                    className="w-3 h-3 bg-secondary rounded-full"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <motion.div 
                    className="w-3 h-3 bg-accent rounded-full"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.7, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.div 
                    className="w-3 h-3 bg-primary rounded-full"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.3, repeat: Infinity, delay: 0.4 }}
                  />
                </div>
              </div>
              
              {/* Arms */}
              <motion.div 
                className="absolute top-36 -left-8 w-12 h-28 bg-card rounded-full border border-primary/30"
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: 'top center', transform: 'translateZ(10px)' }}
              />
              <motion.div 
                className="absolute top-36 -right-8 w-12 h-28 bg-card rounded-full border border-primary/30"
                animate={{ rotate: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: 'top center', transform: 'translateZ(10px)' }}
              />
              
              {/* Backpack */}
              <div className="absolute -z-10 top-16 left-1/2 w-40 h-32 bg-muted rounded-lg border border-primary/20 transform -translate-x-1/2 translate-z-[-30px]" style={{ transform: 'translateZ(-30px)' }}>
                <div className="absolute top-4 left-4 w-6 h-6 rounded-full bg-accent/30 border border-accent/40"></div>
                <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-secondary/30 border border-secondary/40"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-primary/30 border border-primary/40 rounded-md"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Floating elements around astronaut */}
      <motion.div 
        className="absolute top-10 left-10 w-8 h-8 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/30"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 8, repeat: Infinity, ease: "linear" }
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-20 w-6 h-6 bg-secondary/10 backdrop-blur-sm rounded-full border border-secondary/30"
        animate={{ 
          y: [0, 15, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      {/* Stars effect */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3
            }}
            animate={{
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 1 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
      
      {/* Radar scanning effect below */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-56 h-2 bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
    </div>
  );
};

export default Astronaut3D;
