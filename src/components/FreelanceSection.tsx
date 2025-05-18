
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle, Clock, DollarSign, LucideApple, LucideAppWindow, Send, University, Users, Webhook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';

export default function FreelanceSection() {
  const { toast } = useToast();

  const handleAvailabilityClick = () => {
    toast({
      title: "Message sent!",
      description: "I'll get back to you with my availability soon.",
    });
  };

  const services = [
    {
      title: "Web Development",
      description: "From simple landing pages to complex full-stack applications",
      icon: <Webhook className="h-10 w-10 text-primary" />,
      items: ["React/Next.js Websites", "E-commerce Solutions", "Personal Projecs/ Portfolios", "API Integration"]
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile applications with Flutter",
      icon: <LucideApple className="h-10 w-10 text-secondary" />,
      items: ["Flutter Applications", "Firebase Integration", "Push Notifications", "App Store Submission"]
    },
    {
      title: "Student Projects",
      description: "Help with academic and learning projects",
      icon: <University className="h-10 w-10 text-accent" />, 
      items: ["Project Consultation", "Code Reviews", "Assignment Help", "Mentoring"]
    }
  ];

  return (
    <section id="freelance" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Student-like design elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Notebook paper effect background for the heading */}
      <div className="container relative">
        <div className="absolute left-0 right-0 top-0 h-1 bg-blue-200 dark:bg-blue-900"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800">
            Available for Work
          </Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Freelance <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I offer professional development services to bring your ideas to life. As a student, I bring fresh perspectives and the latest technologies to your projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow h-full relative overflow-hidden">
                {/* Doodle-like decorations */}
                <div className="absolute top-0 right-0 w-16 h-16">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-primary/10">
                    <path d="M95,5 Q80,20 95,35 Q80,50 95,65 Q80,80 95,95" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 relative"
        >
          {/* Sticky note effect */}
          <div className="absolute -top-3 -right-3 w-20 h-20 bg-yellow-200 dark:bg-yellow-700 rotate-6 z-0 rounded-sm"></div>
          
          <div className="relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-display font-bold mb-4">Let's Work Together</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Currently accepting new clients for web and mobile projects. As a student developer, I offer competitive rates and fresh perspectives.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Quick Turnaround</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Most projects completed within 2-4 weeks</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-pink-100 dark:bg-pink-900 p-3 rounded-full mr-4">
                      <DollarSign className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium">Student-Friendly Rates</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Competitive pricing without compromising quality</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600">
                <h4 className="text-xl font-bold mb-4">Interested in Working With Me?</h4>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                  Send me a message with your project details and I'll get back to you within 24 hours with availability and a free quote.
                </p>
                <div className="space-y-4">
                  <a href="/contact">
                  <Button 
                    onClick={handleAvailabilityClick}
                    className="w-full   hover:opacity-90"
                  >
                    Check My Availability
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                  </a>
                  <a href="/contact">
                    <Button variant="outline" className="w-full">
                      Contact Me
                    </Button>
                  </a>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Or email me directly at{" "}
                    <a 
                      href="mailto:mayankmanchanda2005@gmail.com"
                      className="text-primary hover:underline"
                    >
                      mayankmanchanda2005@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
