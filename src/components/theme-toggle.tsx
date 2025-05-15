
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative group"
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-md"
        animate={{
          boxShadow: [
            "0 0 0 rgba(66, 240, 233, 0)",
            "0 0 5px rgba(66, 240, 233, 0.5)",
            "0 0 0 rgba(66, 240, 233, 0)",
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      <Sun 
        className="h-5 w-5 absolute transition-all scale-100 rotate-0 dark:scale-0 dark:rotate-90 dark:opacity-0" 
      />
      <Moon 
        className="h-5 w-5 absolute transition-all scale-0 -rotate-90 dark:scale-100 dark:rotate-0 dark:opacity-100" 
      />
      <span className="sr-only">Toggle theme</span>
      
      {/* Gaming-style indicators */}
      <motion.div 
        className="absolute -top-3 -right-4 opacity-0 dark:opacity-100 transition-opacity"
        initial={{ scale: 0.8 }}
        animate={{ scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <svg width="24" height="24" viewBox="0 0 100 100" className="text-primary">
          <polygon points="50,10 61,35 90,35 65,55 75,80 50,65 25,80 35,55 10,35 39,35" 
            fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>
      </motion.div>
      
      <motion.div 
        className="absolute -bottom-2 -left-2 w-2 h-2 rounded-full bg-primary hidden dark:block"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </Button>
  );
}
