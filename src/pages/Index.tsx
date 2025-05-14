
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Briefcase, Book, Star, Users, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "About Me",
    description: "Learn about my background, education, and skills that make me who I am today.",
    icon: <Users className="h-10 w-10 text-primary" />,
    link: "/about",
    color: "bg-primary/10"
  },
  {
    title: "My Projects",
    description: "Explore my portfolio showcasing web applications, mobile apps, and other creative work.",
    icon: <Code className="h-10 w-10 text-secondary" />,
    link: "/projects",
    color: "bg-secondary/10"
  },
  {
    title: "Skills & Expertise",
    description: "Dive into my technical skills, programming languages, and technologies I work with.",
    icon: <Star className="h-10 w-10 text-accent" />,
    link: "/skills",
    color: "bg-accent/10"
  },
  {
    title: "Freelance Services",
    description: "Professional services I offer as a freelancer for clients and businesses.",
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    link: "/freelance",
    color: "bg-primary/10"
  },
  {
    title: "Get in Touch",
    description: "Contact me for collaborations, projects or to discuss potential opportunities.",
    icon: <Mail className="h-10 w-10 text-secondary" />,
    link: "/contact",
    color: "bg-secondary/10"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />

      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 relative"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Explore My <span className="text-gradient">Portfolio</span>
            </h2>

            {/* Student-style annotation */}
            <motion.div 
              className="absolute -top-10 md:top-0 right-0 md:right-20 transform rotate-12 font-hand text-xl text-accent opacity-70"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Take a look around!
            </motion.div>
            
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Navigate through different sections to learn more about my skills, projects, and services
            </p>

            {/* Random doodle */}
            <div className="absolute -bottom-16 left-1/4 hidden md:block">
              <svg width="100" height="60" viewBox="0 0 100 60" className="text-muted-foreground/20">
                <path d="M0,30 C20,10 80,10 100,30" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M30,30 L70,30" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" />
              </svg>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative"
              >
                <div className="relative group">
                  <Link to={section.link}>
                    <div className="h-full p-6 rounded-xl border border-border hover:border-primary/50 bg-card hover:bg-card/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <div className={`${section.color} p-4 rounded-full w-fit mb-4`}>
                        {section.icon}
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                      <p className="text-muted-foreground mb-6">{section.description}</p>
                      
                      <div className="flex items-center text-primary font-medium">
                        Explore
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                  
                  {/* Student-like elements */}
                  {Math.random() > 0.7 && (
                    <div className="absolute -top-4 -right-4 hidden md:block">
                      <svg width="50" height="50" viewBox="0 0 100 100" className="text-accent/20">
                        <path d="M30,30 L70,70 M30,70 L70,30" stroke="currentColor" strokeWidth="4" />
                      </svg>
                    </div>
                  )}
                  
                  {Math.random() > 0.6 && (
                    <div className="pencil-line absolute h-10 w-20 -bottom-2 left-10"></div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="inline-block notebook-paper p-6 rounded-lg transform -rotate-1 relative">
              <p className="font-hand text-xl">
                Looking for a developer for your next project?
              </p>
              <Link to="/contact">
                <Button className="mt-4 bg-purple-gradient hover:opacity-90">
                  Let's Work Together
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              
              {/* Coffee stain */}
              <div className="coffee-stain absolute -top-10 -right-10"></div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
