
import { useState } from 'react';
import { motion } from 'framer-motion';

interface PixelProps {
  initialColor?: string;
  size?: number;
  className?: string;
  onClick?: () => void;
}

const InteractivePixel: React.FC<PixelProps> = ({ 
  initialColor = 'bg-primary',
  size = 16,
  className = '',
  onClick
}) => {
  const [isActive, setIsActive] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [color, setColor] = useState(initialColor);
  
  const colors = [
    'bg-primary',
    'bg-secondary',
    'bg-accent',
    'bg-destructive',
    'bg-green-500',
    'bg-yellow-500',
    'bg-orange-500'
  ];
  
  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    setIsActive(!isActive);
    setColor(colors[newCount % colors.length]);
    
    if (onClick) onClick();
  };
  
  return (
    <motion.div
      className={`${color} cursor-pointer pixel-corners ${className}`}
      style={{ 
        width: `${size}px`, 
        height: `${size}px`, 
      }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        boxShadow: isActive 
          ? ['0 0 0 rgba(66, 240, 233, 0)', '0 0 10px rgba(66, 240, 233, 0.8)', '0 0 0 rgba(66, 240, 233, 0)']
          : '0 0 0 rgba(66, 240, 233, 0)'
      }}
      transition={{ duration: isActive ? 1.5 : 0, repeat: isActive ? Infinity : 0 }}
      onClick={handleClick}
    />
  );
};

export interface PixelGridProps {
  columns?: number;
  rows?: number;
  pixelSize?: number;
  spacing?: number;
  className?: string;
}

export const PixelGrid: React.FC<PixelGridProps> = ({
  columns = 12,
  rows = 6,
  pixelSize = 12,
  spacing = 2,
  className = ''
}) => {
  const [activeCount, setActiveCount] = useState(0);
  
  return (
    <div className={`relative ${className}`}>
      <div 
        className="grid" 
        style={{ 
          gridTemplateColumns: `repeat(${columns}, ${pixelSize}px)`,
          gridTemplateRows: `repeat(${rows}, ${pixelSize}px)`,
          gap: `${spacing}px`,
        }}
      >
        {Array.from({ length: columns * rows }).map((_, index) => (
          <InteractivePixel 
            key={index} 
            size={pixelSize}
            initialColor={Math.random() > 0.8 ? 'bg-primary/50' : 'bg-muted/30'}
            onClick={() => setActiveCount(prev => prev + 1)}
          />
        ))}
      </div>
      
      {activeCount > 10 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-full mt-2 left-0 w-full text-center text-xs text-primary/80 font-gaming"
        >
          ACHIEVEMENT UNLOCKED: PIXEL ARTIST {activeCount}/100
        </motion.div>
      )}
    </div>
  );
};

export default InteractivePixel;
