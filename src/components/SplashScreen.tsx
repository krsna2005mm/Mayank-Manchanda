
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!showSplash) return null;
  
  return (
    <div className="splash-screen">
      <div className="relative">
        <motion.div 
          className="splash-logo text-5xl md:text-7xl font-display font-bold"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: 0.2
          }}
        >
          <span className="text-gradient">M.M</span>
        </motion.div>
        
        {/* Student-like doodle elements */}
        <motion.div 
          className="absolute -top-10 -right-16 transform rotate-12"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <svg width="60" height="60" viewBox="0 0 100 100" className="text-primary/60">
            <path d="M20,50 Q40,20 50,50 Q60,80 80,50" stroke="currentColor" strokeWidth="4" fill="none" />
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-0 -left-20"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: -12 }}
          transition={{ delay: 1 }}
        >
          <svg width="70" height="70" viewBox="0 0 100 100" className="text-accent/60">
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="4" fill="none" />
            <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </motion.div>
      </div>
      
      <motion.p 
        className="splash-text mt-6 text-lg md:text-xl font-hand transform -rotate-2"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Welcome to my creative space!
      </motion.p>
      
      <motion.div 
        className="absolute bottom-10 w-full text-center text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Loading awesome stuff...
      </motion.div>
      
      {/* Coffee stains and pencil marks - student-like elements */}
      <div className="coffee-stain absolute top-1/4 right-1/4"></div>
      <div className="coffee-stain absolute bottom-1/3 left-1/4" style={{ transform: 'scale(0.8, 0.7)' }}></div>
      
      <div className="pencil-line absolute w-32 h-8 top-2/3 right-1/3 transform rotate-12"></div>
      <div className="pencil-line absolute w-48 h-8 bottom-1/4 left-1/4 transform -rotate-6"></div>
    </div>
  );
}
