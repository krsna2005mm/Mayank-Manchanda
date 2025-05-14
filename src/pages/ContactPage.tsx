
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function ContactPage() {
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
              Get in <span className="text-gradient">Touch</span>
            </h1>
            
            <div className="w-full h-full absolute top-0 left-0 -z-10 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full grainy"></div>
              
              {/* Student-like doodles */}
              <div className="absolute -top-10 left-40 transform rotate-12">
                <svg width="80" height="80" viewBox="0 0 100 100">
                  <path d="M20,50 C30,30 70,30 80,50" stroke="currentColor" strokeWidth="3" fill="none" className="text-primary/40" />
                  <path d="M30,70 L70,70" stroke="currentColor" strokeWidth="2" className="text-primary/40" />
                </svg>
              </div>
              
              {/* Paper clip effect */}
              <div className="absolute top-0 right-20 transform -rotate-45">
                <svg width="30" height="60" viewBox="0 0 100 100" className="text-muted-foreground/30">
                  <path d="M60,20 L60,80 Q60,90 50,90 Q40,90 40,80 L40,30 Q40,20 50,20 Q60,20 60,30" 
                    stroke="currentColor" strokeWidth="5" fill="none" />
                </svg>
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              Reach out for collaborations, projects, or just to say hello
            </p>
          </motion.div>
        </div>
        <ContactSection />
      </motion.div>
      <Footer />
    </>
  );
}
