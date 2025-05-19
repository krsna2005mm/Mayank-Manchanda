
import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, X } from "lucide-react";

type Position = { x: number; y: number }; // Represents center position as percentage (0-100)

// Constants for the game when it's open in the modal
const GAME_AREA_DIMENSION = 200; // pixels for the square game area
const PLAYER_DIAMETER_PIXELS = 15;
const TARGET_DIAMETER_PIXELS = 12;

const MiniGame: React.FC = () => {
  // State for player and target positions (center percentages)
  const [playerPos, setPlayerPos] = useState<Position>({ x: 50, y: 50 });
  const [targetPos, setTargetPos] = useState<Position>({ x: 75, y: 75 });
  const [score, setScore] = useState(0);
  const [isActive, setIsActive] = useState(false); // Is game logic running (after "Start Game")
  const [isMinimized, setIsMinimized] = useState(true); // Is the modal shown or just the icon
  const gameRef = useRef<HTMLDivElement>(null); // Ref for the modal content

  // Calculate radius in percentage for boundary and collision checks
  const playerRadiusPercent = (PLAYER_DIAMETER_PIXELS / 2 / GAME_AREA_DIMENSION) * 100;
  const targetRadiusPercent = (TARGET_DIAMETER_PIXELS / 2 / GAME_AREA_DIMENSION) * 100;

  const moveTarget = useCallback(() => {
    // Ensure target is fully within bounds by placing its center
    const newX = targetRadiusPercent + Math.random() * (100 - 2 * targetRadiusPercent);
    const newY = targetRadiusPercent + Math.random() * (100 - 2 * targetRadiusPercent);
    setTargetPos({ x: newX, y: newY });
  }, [targetRadiusPercent]);

  // Collision detection
  useEffect(() => {
    if (!isActive || isMinimized) return;

    const dx = playerPos.x - targetPos.x; // Difference in percentage points
    const dy = playerPos.y - targetPos.y;
    const distancePercent = Math.sqrt(dx * dx + dy * dy);

    if (distancePercent < playerRadiusPercent + targetRadiusPercent) {
      setScore((prev) => prev + 1);
      moveTarget();
    }
  }, [playerPos, targetPos, isActive, isMinimized, moveTarget, playerRadiusPercent, targetRadiusPercent]);

  // Handle keyboard control
  useEffect(() => {
    if (!isActive || isMinimized) return; // Only active if game started and modal is open

    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent default browser action for arrow keys to stop page scrolling
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
      }

      setPlayerPos((prev) => {
        const step = 2.5; // Movement step in percentage points
        let newX = prev.x;
        let newY = prev.y;

        switch (e.key) {
          case "ArrowUp":
            newY = Math.max(playerRadiusPercent, prev.y - step);
            break;
          case "ArrowDown":
            newY = Math.min(100 - playerRadiusPercent, prev.y + step);
            break;
          case "ArrowLeft":
            newX = Math.max(playerRadiusPercent, prev.x - step);
            break;
          case "ArrowRight":
            newX = Math.min(100 - playerRadiusPercent, prev.x + step);
            break;
        }
        return { x: newX, y: newY };
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isActive, isMinimized, playerRadiusPercent]);

  const openGame = () => {
    window.scrollTo(0, 0);
    setIsMinimized(false);
    setIsActive(false); // Require "Start Game" click
    setScore(0);
    setPlayerPos({ x: 50, y: 50 }); // Reset player to center
    moveTarget(); // Set initial target position
  };

  const closeGame = useCallback(() => {
    setIsActive(false);
    setIsMinimized(true);
  }, []);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (gameRef.current && !gameRef.current.contains(event.target as Node) && !isMinimized) {
        closeGame();
      }
    };
    if (!isMinimized) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMinimized, closeGame]);

  // Handle Escape key to close
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !isMinimized) {
        closeGame();
      }
    };
    if (!isMinimized) {
      window.addEventListener("keydown", handleEscapeKey);
    }
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isMinimized, closeGame]);

  return (
    <>
      {/* Minimized Game Icon/Button - Always present but visibility controlled by isMinimized */}
      {isMinimized && (
        <motion.button
          className="fixed bottom-4 right-4 z-[100] bg-card border border-primary/30 rounded-lg shadow-lg flex items-center justify-center text-primary hover:bg-primary/10 transition-colors"
          onClick={openGame}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{ width: "50px", height: "50px" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }} // Added exit animation for the button itself if needed elsewhere
          aria-label="Open Mini Game"
        >
          <Gamepad2 className="w-6 h-6" />
        </motion.button>
      )}

      {/* Modal Game View */}
      <AnimatePresence>
        {!isMinimized && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[100] bg-black/70 w-screen h-screen backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeGame} // Click backdrop to close
            />

            {/* Game Modal Content */}
            <motion.div
              ref={gameRef}
              className="fixed inset-0 m-auto z-[101] bg-card border border-primary/30 rounded-lg shadow-2xl overflow-hidden cyber-border flex flex-col"
              style={{
                // Fixed size for the modal, accommodating header, padding, and game area
                width: `${GAME_AREA_DIMENSION + 50}px`, 
                height: `${GAME_AREA_DIMENSION + 90}px`,
              }}
              initial={{ opacity: 0, scale: 0.7, y: "20px" }}
              animate={{ opacity: 1, scale: 1, y: "0px" }}
              exit={{ opacity: 0, scale: 0.7, y: "20px" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-3 border-b border-primary/20 bg-card/80">
                <div className="font-gaming text-md text-primary">CYBER DASH</div>
                <button
                  className="text-primary hover:text-accent transition-colors p-1 rounded-full hover:bg-primary/10"
                  onClick={closeGame}
                  aria-label="Close Mini Game"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Game Content Area */}
              <div className="p-3 flex-grow flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-gaming text-sm text-primary">SCORE: {score}</div>
                </div>
                {/* The actual game play area */}
                <div
                  className="relative bg-muted rounded-md w-full overflow-hidden"
                  style={{ height: `${GAME_AREA_DIMENSION}px` }} // Width is 100% of parent
                >
                  {isActive && (
                    <>
                      {/* Target */}
                      <motion.div
                        className="absolute bg-accent rounded-full"
                        style={{
                          width: `${TARGET_DIAMETER_PIXELS}px`,
                          height: `${TARGET_DIAMETER_PIXELS}px`,
                          left: `${targetPos.x}%`, // Position center
                          top: `${targetPos.y}%`,  // Position center
                          transform: "translate(-50%, -50%)", // Adjust to make left/top the center
                        }}
                        animate={{
                          boxShadow: [
                            "0 0 0px rgba(255, 77, 207, 0.5)",
                            "0 0 10px rgba(255, 77, 207, 0.9)",
                            "0 0 0px rgba(255, 77, 207, 0.5)",
                          ],
                        }}
                        transition={{ repeat: Infinity, duration: 1.2 }}
                      />
                      {/* Player */}
                      <motion.div
                        className="absolute bg-primary rounded-full"
                        style={{
                          width: `${PLAYER_DIAMETER_PIXELS}px`,
                          height: `${PLAYER_DIAMETER_PIXELS}px`,
                          left: `${playerPos.x}%`, // Position center
                          top: `${playerPos.y}%`,  // Position center
                          transform: "translate(-50%, -50%)", // Adjust to make left/top the center
                        }}
                        animate={{
                           boxShadow: [
                            "0 0 0px rgba(66, 240, 233, 0.5)",
                            "0 0 8px rgba(66, 240, 233, 0.8)",
                            "0 0 0px rgba(66, 240, 233, 0.5)",
                           ],
                        }}
                        transition={{ repeat: Infinity, duration: 1 }}
                      />
                    </>
                  )}
                  {!isActive && ( // Show "Start Game" button if modal is open but game not active
                    <div className="flex items-center justify-center h-full">
                      <button
                        className="bg-primary/20 hover:bg-primary/30 px-4 py-2 rounded font-gaming text-md text-primary transition-all hover:scale-105"
                        onClick={() => setIsActive(true)}
                      >
                        START GAME
                      </button>
                    </div>
                  )}
                  {isActive && ( // Show controls hint if game is active
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground/80 whitespace-nowrap">
                      Use arrow keys to move
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MiniGame;
