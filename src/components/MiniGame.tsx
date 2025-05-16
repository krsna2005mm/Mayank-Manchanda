
import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";

type Position = { x: number; y: number };

const MiniGame: React.FC = () => {
  const [playerPos, setPlayerPos] = useState<Position>({ x: 15, y: 15 });
  const [targetPos, setTargetPos] = useState<Position>({ x: 85, y: 85 });
  const [score, setScore] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  
  const gridSize = isMinimized ? 80 : 200;
  const playerSize = isMinimized ? 10 : 15;
  const targetSize = isMinimized ? 8 : 12;
  
  // Generate a new random position for the target
  const moveTarget = useCallback(() => {
    const newX = Math.floor(Math.random() * 80) + 10;
    const newY = Math.floor(Math.random() * 80) + 10;
    setTargetPos({ x: newX, y: newY });
  }, []);

  // Check if player caught the target
  useEffect(() => {
    if (!isActive) return;
    
    const playerCenterX = playerPos.x + playerSize / 2;
    const playerCenterY = playerPos.y + playerSize / 2;
    const targetCenterX = targetPos.x + targetSize / 2;
    const targetCenterY = targetPos.y + targetSize / 2;
    
    const distance = Math.sqrt(
      Math.pow(playerCenterX - targetCenterX, 2) + 
      Math.pow(playerCenterY - targetCenterY, 2)
    );
    
    if (distance < (playerSize + targetSize) / 2) {
      setScore(prev => prev + 1);
      moveTarget();
    }
  }, [playerPos, targetPos, isActive, playerSize, targetSize, moveTarget]);

  // Handle keyboard control
  useEffect(() => {
    if (!isActive) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      setPlayerPos(prev => {
        const step = 5;
        let newX = prev.x;
        let newY = prev.y;
        
        switch (e.key) {
          case "ArrowUp":
            newY = Math.max(0, prev.y - step);
            break;
          case "ArrowDown":
            newY = Math.min(100 - playerSize, prev.y + step);
            break;
          case "ArrowLeft":
            newX = Math.max(0, prev.x - step);
            break;
          case "ArrowRight":
            newX = Math.min(100 - playerSize, prev.x + step);
            break;
        }
        
        return { x: newX, y: newY };
      });
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isActive, playerSize]);

  const toggleGame = () => {
    if (isMinimized) {
      setIsMinimized(false);
      setTimeout(() => setIsActive(true), 500);
    } else {
      setIsActive(false);
      setIsMinimized(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`fixed bottom-4 right-4 z-50 bg-card border border-primary/30 rounded-lg shadow-lg overflow-hidden ${!isMinimized ? 'cyber-border' : ''}`}
      style={{
        width: isMinimized ? '50px' : `${gridSize}px`,
        height: isMinimized ? '50px' : `${gridSize + 40}px`,
        transition: 'width 0.3s, height 0.3s'
      }}
    >
      {isMinimized ? (
        <motion.button
          className="w-full h-full flex items-center justify-center text-primary hover:bg-primary/10 transition-colors"
          onClick={toggleGame}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Gamepad2 className="w-6 h-6" />
        </motion.button>
      ) : (
        <div className="w-full h-full p-2">
          <div className="flex justify-between items-center mb-2">
            <div className="font-gaming text-sm text-primary">SCORE: {score}</div>
            <button 
              className="text-xs bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded transition-colors"
              onClick={toggleGame}
            >
              Minimize
            </button>
          </div>
          <div 
            className="relative bg-muted rounded-md w-full"
            style={{ height: `${gridSize}px` }}
          >
            {isActive && (
              <>
                {/* Game target */}
                <motion.div
                  className="absolute bg-accent rounded-full"
                  style={{ 
                    width: `${targetSize}px`, 
                    height: `${targetSize}px`,
                    left: `${targetPos.x}%`, 
                    top: `${targetPos.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  animate={{ 
                    boxShadow: ["0 0 0px rgba(255, 77, 207, 0.5)", "0 0 8px rgba(255, 77, 207, 0.8)", "0 0 0px rgba(255, 77, 207, 0.5)"]
                  }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
                
                {/* Player */}
                <motion.div
                  className="absolute bg-primary rounded-full"
                  style={{ 
                    width: `${playerSize}px`, 
                    height: `${playerSize}px`,
                    left: `${playerPos.x}%`, 
                    top: `${playerPos.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  animate={{ 
                    boxShadow: ["0 0 0px rgba(66, 240, 233, 0.5)", "0 0 5px rgba(66, 240, 233, 0.8)", "0 0 0px rgba(66, 240, 233, 0.5)"]
                  }}
                  transition={{ repeat: Infinity, duration: 1 }}
                />
              </>
            )}
            
            {!isActive && (
              <div className="flex items-center justify-center h-full">
                <button 
                  className="bg-primary/20 hover:bg-primary/30 px-3 py-2 rounded font-gaming text-sm"
                  onClick={() => setIsActive(true)}
                >
                  START GAME
                </button>
              </div>
            )}
            
            {isActive && (
              <div className="absolute bottom-2 left-2 text-xs text-muted-foreground">
                Use arrow keys to move
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default MiniGame;
