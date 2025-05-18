
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { motion } from 'framer-motion';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
} from '@/components/ui/sheet';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
  { name: 'Freelance', href: '/freelance' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Student-like random doodle position function
  const getRandomPosition = (i: number) => {
    const positions = ["-top-2", "-top-1", "-bottom-1", "-bottom-2"];
    const rotations = ["rotate-3", "-rotate-2", "rotate-1", "-rotate-3"];
    return `${positions[i % positions.length]} ${rotations[i % rotations.length]}`;
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled 
          ? 'bg-background/80 dark:bg-gray-900/80 backdrop-blur-md py-2 shadow-md' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="relative">
          <span className="text-2xl font-display font-bold text-gradient">
            M.M
          </span>
          {/* Student-like doodle */}
          <motion.div 
            className="absolute -top-3 -right-8 hidden md:block"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <svg width="30" height="30" viewBox="0 0 100 100" className="text-accent/40">
              <path d="M30,30 C 50,10 70,30 70,50 C 70,70 50,90 30,70 C 10,50 10,50 30,30" 
                stroke="currentColor" strokeWidth="4" fill="none" />
            </svg>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1 items-center">
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.href;
            
            return (
              <div key={link.name} className="relative">
                <Link
                  to={link.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-lg transition-colors relative",
                    isActive 
                      ? "text-primary" 
                      : "hover:text-primary"
                  )}
                >
                  {link.name}
                  
                  {/* Show active indicator with student-like underline */}
                  {isActive && (
                    <motion.span 
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{ borderRadius: "1px" }}
                    />
                  )}
                </Link>
                
                {/* Student-like doodle marks */}
                {Math.random() > 0.7 && (
                  <div className={cn("absolute pencil-line w-8 h-4", getRandomPosition(i))}></div>
                )}
              </div>
            );
          })}
          
          <Link to="/contact">
            <Button size="sm" className="ml-2  hover:opacity-90 transition-opacity">
              Hire Me
            </Button>
          </Link>
          
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px] dark:border-slate-700">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link, i) => {
                  const isActive = location.pathname === link.href;
                  
                  return (
                    <motion.div
                      key={link.name}
                      className="relative"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to={link.href}
                        className={cn(
                          "px-3 py-2 text-lg font-medium transition-colors block",
                          isActive 
                            ? "text-primary" 
                            : "hover:text-primary"
                        )}
                      >
                        {link.name}
                        
                        {/* Student-like doodle elements */}
                        {isActive && (
                          <motion.div 
                            className="absolute left-0 -top-1"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                          >
                            <svg width="15" height="15" viewBox="0 0 100 100" className="text-accent/60">
                              <path d="M20,50 L80,50" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                              <path d="M50,20 L50,80" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                            </svg>
                          </motion.div>
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
                <Link to="/contact" className="mt-2">
                  <Button className="w-full   hover:opacity-90 transition-opacity">
                    Hire Me
                  </Button>
                </Link>
              </nav>
              
              {/* Student-like doodles */}
              <motion.div 
                className="absolute bottom-10 right-6"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                <svg width="60" height="60" viewBox="0 0 100 100" className="text-muted-foreground/20">
                  <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path d="M30,30 L70,70" stroke="currentColor" strokeWidth="2" />
                  <path d="M30,70 L70,30" stroke="currentColor" strokeWidth="2" />
                </svg>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
