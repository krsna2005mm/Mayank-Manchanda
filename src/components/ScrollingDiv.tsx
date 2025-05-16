
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ScrollingDivProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ScrollingDiv({ className, children }: ScrollingDivProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('left');
  const divRef = useRef<HTMLDivElement>(null);
  const maxOffset = window.innerWidth * 0.3;

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 0) {
      // Calculate movement based on scroll
      const factor = scrollPosition / 20;
      let currentOffset;
      
      if (direction === 'left') {
        currentOffset = factor % (maxOffset * 2);
        if (currentOffset > maxOffset) {
          setDirection('right');
        }
      } else {
        currentOffset = maxOffset - (factor % maxOffset);
        if (currentOffset < 0) {
          setDirection('left');
        }
      }
    }
  }, [scrollPosition, direction, maxOffset]);

  return (
    <motion.div
      ref={divRef}
      className={`fixed right-0 top-1/4 h-80 w-40 z-10 rounded-l-2xl cyber-border ${className || ''}`}
      animate={{
        x: direction === 'left' 
          ? [0, -Math.min(scrollPosition / 5, maxOffset)]
          : [-maxOffset, -maxOffset + Math.min((scrollPosition % maxOffset) / 5, maxOffset)]
      }}
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
    >
      <div className="relative w-full h-full overflow-hidden rounded-l-xl bg-primary/10 backdrop-blur-sm border-l-2 border-t-2 border-b-2 border-primary/30">
        {/* Gaming-style HUD elements */}
        <div className="absolute top-0 left-0 w-full p-2 border-b border-primary/40 flex justify-between items-center">
          <div className="text-primary text-xs font-gaming">STATUS_PANEL</div>
          <motion.div 
            className="w-2 h-2 rounded-full bg-primary"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        
        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-20 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-neon-grid bg-[length:10px_10px]"></div>
        </div>
        
        {/* Content container */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-4">
          {children || (
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 radar-scan rounded-full border border-primary/50"></div>
              <motion.div
                className="absolute inset-8 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-3xl font-gaming text-primary">M</span>
              </motion.div>
            </div>
          )}
          
          <div className="mt-4 text-center">
            <p className="text-xs font-gaming text-secondary">SCROLL TO NAVIGATE</p>
            <motion.p 
              className="text-xs text-accent mt-1"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              SYSTEM ONLINE
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
