
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function ProjectsPage() {
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
              My <span className="text-gradient">Projects</span>
            </h1>
            
            <div className="w-full h-full absolute top-0 left-0 -z-10 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full grainy"></div>
              
              {/* Student-like doodles */}
              <div className="absolute top-10 right-20 transform rotate-12">
                <svg width="70" height="70" viewBox="0 0 100 100">
                  <path d="M30,30 L70,70 M30,70 L70,30" stroke="currentColor" strokeWidth="3" className="text-accent/40" />
                </svg>
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              Explore my portfolio of recent projects and creative work
            </p>
          </motion.div>
        </div>
        <ProjectsSection />
      </motion.div>
      <Footer />
    </>
  );
}
