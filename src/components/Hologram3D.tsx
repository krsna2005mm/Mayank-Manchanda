
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Hologram3DProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  rotationSpeed?: number;
  children?: React.ReactNode;
}

const Hologram3D: React.FC<Hologram3DProps> = ({ 
  className = '', 
  size = 'md', 
  color = 'primary',
  rotationSpeed = 2,
  children 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const sizeClasses = {
    sm: 'w-20 h-20',
    md: 'w-40 h-40',
    lg: 'w-64 h-64',
  };
  
  const colorClasses = {
    primary: 'border-primary text-primary',
    secondary: 'border-secondary text-secondary',
    accent: 'border-accent text-accent',
  };
  
  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <motion.div 
        className="absolute inset-0"
        animate={{ rotateY: [0, 360] }}
        transition={{ duration: rotationSpeed * 5, repeat: Infinity, ease: "linear" }}
      >
        <div className={`relative w-full h-full flex items-center justify-center ${colorClasses[color as keyof typeof colorClasses]}`}>
          {/* 3D Hologram Frame */}
          <div className="absolute inset-0 border-2 border-current opacity-30 transform rotate-x-45 rotate-y-45"></div>
          <div className="absolute inset-0 border-2 border-current opacity-50 animate-pulse"></div>
          
          {/* Hologram content */}
          <div className="absolute inset-0 flex items-center justify-center">
            {children || (
              <motion.div 
                className="w-1/2 h-1/2"
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                  scale: [0.9, 1.1, 0.9]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full text-current">
                  <polygon 
                    points="50,15 75,40 75,70 50,85 25,70 25,40" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none"
                  />
                  <line x1="50" y1="15" x2="50" y2="85" stroke="currentColor" strokeWidth="1" />
                  <line x1="25" y1="40" x2="75" y2="40" stroke="currentColor" strokeWidth="1" />
                  <line x1="25" y1="70" x2="75" y2="70" stroke="currentColor" strokeWidth="1" />
                  <circle cx="50" cy="50" r="10" fill="currentColor" fillOpacity="0.3" />
                </svg>
              </motion.div>
            )}
          </div>
          
          {/* Scanning lines */}
          <motion.div 
            className="absolute inset-0 overflow-hidden"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.div 
              className="absolute left-0 right-0 h-[1px] bg-current opacity-50"
              initial={{ top: 0 }}
              animate={{ top: '100%' }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
          
          {/* Flickering effect */}
          <motion.div 
            className="absolute inset-0 bg-current opacity-0"
            animate={{ opacity: [0, 0.05, 0] }}
            transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 5 }}
          />
        </div>
      </motion.div>
      
      {/* Base */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-[2px] bg-gradient-to-r from-transparent via-current to-transparent opacity-70" />
      
      {/* Reflection */}
      <motion.div 
        className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-1/3 h-10 bg-gradient-to-b from-current to-transparent opacity-20"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </div>
  );
};

export default Hologram3D;
