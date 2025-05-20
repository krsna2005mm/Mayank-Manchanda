
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
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
              
              <div className="absolute top-10 right-20">
                <svg width="80" height="80" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary/30" />
                  <path d="M30,50 L70,50 M50,30 L50,70" stroke="currentColor" strokeWidth="2" className="text-primary/30" />
                </svg>
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              Learn about my background, education, skills and experiences
            </p>
          </motion.div>
        </div>
        <AboutSection />
        <ExperienceSection />
      </motion.div>
      <Footer />
    </>
  );
}
