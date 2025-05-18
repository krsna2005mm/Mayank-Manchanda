
import Navbar from "@/components/Navbar";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function SkillsPage() {
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
              My <span className="text-gradient">Skills</span>
            </h1>
            
            <div className="w-full h-full absolute top-0 left-0 -z-10 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full grainy"></div>
              
              {/* Student-like doodles */}
              <div className="absolute bottom-0 right-0">
                <svg width="120" height="120" viewBox="0 0 100 100">
                  <path d="M10,10 Q50,90 90,10" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary/30" />
                </svg>
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              Technical skills, programming languages, and technologies I work with
            </p>
          </motion.div>
        </div>
        <SkillsSection />
      </motion.div>
      <Footer />
    </>
  );
}
