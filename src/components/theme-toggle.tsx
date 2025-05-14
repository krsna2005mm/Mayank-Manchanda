
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
      className="relative"
    >
      <Sun 
        className="h-5 w-5 absolute transition-all scale-100 rotate-0 dark:scale-0 dark:rotate-90" 
      />
      <Moon 
        className="h-5 w-5 absolute transition-all scale-0 -rotate-90 dark:scale-100 dark:rotate-0" 
      />
      <span className="sr-only">Toggle theme</span>
      
      {/* Student-like doodle */}
      <motion.div 
        className="absolute -top-3 -right-4 opacity-0 dark:opacity-100 transition-opacity"
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        <svg width="24" height="24" viewBox="0 0 100 100" className="text-yellow-300/50">
          <path d="M50,10 L55,30 L75,30 L60,45 L65,65 L50,55 L35,65 L40,45 L25,30 L45,30 Z" 
            fill="currentColor" stroke="currentColor" strokeWidth="1" />
        </svg>
      </motion.div>
    </Button>
  );
}
