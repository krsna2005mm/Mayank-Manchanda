
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Briefcase, Star, Users, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProfileCard from "@/components/ProfileCard";

const sections = [
  {
    title: "About",
    description: "Background, education, and achievements",
    icon: <Users className="h-5 w-5" />,
    link: "/about"
  },
  {
    title: "Projects",
    description: "Web applications and development work",
    icon: <Code className="h-5 w-5" />,
    link: "/projects"
  },
  {
    title: "Skills",
    description: "Technical expertise and technologies",
    icon: <Star className="h-5 w-5" />,
    link: "/skills"
  },
  {
    title: "Services",
    description: "Freelance and development services",
    icon: <Briefcase className="h-5 w-5" />,
    link: "/freelance"
  },
  {
    title: "Contact",
    description: "Let's discuss your project",
    icon: <Mail className="h-5 w-5" />,
    link: "/contact"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />

      {/* Profile Card Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <ProfileCard />
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-16">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-semibold tracking-tight mb-3">
              Explore Portfolio
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Navigate through different sections to learn more about my work and expertise
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link to={section.link}>
                  <div className="group p-6 rounded-lg border border-border hover:border-primary/50 bg-card transition-all duration-200 hover:shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-md bg-primary/10 text-primary">
                        {section.icon}
                      </div>
                      <h3 className="font-semibold">{section.title}</h3>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {section.description}
                    </p>
                    
                    <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all duration-200">
                      <span>Learn more</span>
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </Link>
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
            <div className="inline-block">
              <p className="text-muted-foreground mb-4">
                Ready to start your next project?
              </p>
              <Link to="/contact">
                <Button size="lg" className="shadow-sm">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
