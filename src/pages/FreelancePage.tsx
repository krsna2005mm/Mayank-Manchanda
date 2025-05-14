
import Navbar from "@/components/Navbar";
import FreelanceSection from "@/components/FreelanceSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function FreelancePage() {
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
              <span className="text-gradient">Freelance</span> Services
            </h1>
            
            <div className="w-full h-full absolute top-0 left-0 -z-10 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full grainy"></div>
              
              {/* Coffee stain like a student might have */}
              <div className="coffee-stain absolute -top-10 right-20"></div>
              
              {/* Student-like doodles */}
              <div className="absolute -bottom-20 left-40">
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <path d="M20,20 C40,0 60,0 80,20 S100,60 80,80 S40,100 20,80 S0,40 20,20" 
                    stroke="currentColor" strokeWidth="2" fill="none" className="text-secondary/20" />
                </svg>
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              Professional services I offer to clients as a freelancer
            </p>
          </motion.div>
        </div>
        <FreelanceSection />
      </motion.div>
      <Footer />
    </>
  );
}
