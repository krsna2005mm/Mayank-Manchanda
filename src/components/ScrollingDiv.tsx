
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import InteractivePixel, { PixelGrid } from './InteractivePixel';

interface ScrollingDivProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ScrollingDiv({ className, children }: ScrollingDivProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('left');
  const divRef = useRef<HTMLDivElement>(null);
  const maxOffset = window.innerWidth * 0.3;
  const [interactionCount, setInteractionCount] = useState(0);

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

  const handle3DInteraction = () => {
    setInteractionCount(prev => prev + 1);
  };

  // Calculate vertical position based on scroll
  const verticalPosition = Math.min(100 + scrollPosition, window.innerHeight - 350);

  return (
    <motion.div
      ref={divRef}
      className={`fixed right-0 z-10 rounded-l-2xl cyber-border ${className || ''}`}
      style={{ 
        top: `${verticalPosition}px`,
        height: '80vh',
        maxHeight: '400px',
        width: '160px'
      }}
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
        
        {/* Content container with 3D placeholder */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-4">
          {children || (
            <>
              <div 
                className="relative w-32 h-32 cursor-pointer" 
                onClick={handle3DInteraction}
              >
                {/* 3D Object Placeholder */}
                <div className="absolute inset-0 perspective-[1000px] transform-gpu">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-accent/40 border border-primary/50"
                    style={{ transformStyle: 'preserve-3d' }}
                    animate={{ 
                      rotateY: [0, 360], 
                      rotateX: [15, 15]
                    }}
                    transition={{ 
                      rotateY: { duration: 10, repeat: Infinity, ease: "linear" },
                      rotateX: { duration: 5, repeat: Infinity, ease: "easeInOut", yoyo: true }
                    }}
                  >
                    {/* Front face */}
                    <motion.div 
                      className="absolute inset-0 bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center"
                      style={{ transform: 'translateZ(16px)' }}
                    >
                      <span className="text-2xl font-gaming text-primary">3D</span>
                    </motion.div>
                    
                    {/* Back face */}
                    <motion.div 
                      className="absolute inset-0 bg-secondary/20 backdrop-blur-sm border border-secondary/30 flex items-center justify-center"
                      style={{ transform: 'rotateY(180deg) translateZ(16px)' }}
                    >
                      <span className="text-2xl font-gaming text-secondary">OBJ</span>
                    </motion.div>
                    
                    {/* Top face */}
                    <motion.div 
                      className="absolute inset-x-0 h-[16px] bg-accent/20 backdrop-blur-sm border border-accent/30"
                      style={{ transform: 'rotateX(90deg) translateZ(16px)', width: '100%', top: '-8px' }}
                    />
                    
                    {/* Bottom face */}
                    <motion.div 
                      className="absolute inset-x-0 h-[16px] bg-accent/20 backdrop-blur-sm border border-accent/30"
                      style={{ transform: 'rotateX(-90deg) translateZ(16px)', width: '100%', bottom: '-8px' }}
                    />
                    
                    {/* Left face */}
                    <motion.div 
                      className="absolute inset-y-0 w-[16px] bg-primary/20 backdrop-blur-sm border border-primary/30"
                      style={{ transform: 'rotateY(-90deg) translateZ(16px)', height: '100%', left: '-8px' }}
                    />
                    
                    {/* Right face */}
                    <motion.div 
                      className="absolute inset-y-0 w-[16px] bg-primary/20 backdrop-blur-sm border border-primary/30"
                      style={{ transform: 'rotateY(90deg) translateZ(16px)', height: '100%', right: '-8px' }}
                    />
                  </motion.div>
                </div>
                
                {/* Radar scan effect */}
                <div className="absolute inset-0 radar-scan rounded-full border border-primary/50 opacity-80"></div>
              </div>
              
              {/* Interactive pixel grid underneath */}
              <div className="mt-2">
                <PixelGrid columns={5} rows={2} pixelSize={8} spacing={2} />
              </div>
              
              <div className="mt-3 text-center">
                <p className="text-xs font-gaming text-secondary">3D_OBJECT_READY</p>
                {interactionCount > 0 && (
                  <motion.p 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-accent mt-1"
                  >
                    INTERACTIONS: {interactionCount}
                  </motion.p>
                )}
                <motion.p 
                  className="text-xs text-primary/70 mt-1"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  LOADING MODELS...
                </motion.p>
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
