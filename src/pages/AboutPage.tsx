
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <motion.div 
        className="pt-24 min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="container my-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h1>
            
            <div className="w-full h-full absolute top-0 left-0 -z-10 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full grainy"></div>
              
              {/* Student-like doodles */}
              <div className="absolute -top-10 -right-10">
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary/30" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-20">
                <svg width="80" height="80" viewBox="0 0 100 100">
                  <path d="M20,50 L80,50" stroke="currentColor" strokeWidth="2" className="text-secondary/30" />
                  <path d="M50,20 L50,80" stroke="currentColor" strokeWidth="2" className="text-secondary/30" />
                </svg>
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              Get to know more about my background, education, and skills
            </p>
          </motion.div>
        </div>
        <AboutSection />
      </motion.div>
      <Footer />
    </>
  );
}
