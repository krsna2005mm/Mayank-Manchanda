
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

const projects = [
  {
    title: "RepHelp",
    description: "A high-efficiency reception management platform with seamless verifications, reducing wait time by about 35%. Integrated advanced OCR scanning and automated data entry from various national and international IDs.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    liveLink: "https://rephelp.netlify.app/",
    githubLink: "https://github.com/mayank-1007/RepHelp",
    technologies: ["Next.js 13.4", "React", "Appwrite", "Tailwind CSS", "TypeScript", "Twilio", "Rapi4AI OCR"],
    longDescription: "Developed a high-efficiency reception management platform with seamless verifications, reducing wait time by about 35% and integrated advanced OCR scanning. Automated data entry from various national and international IDs. Further utilized Appwrite database to handle over 75,000 users."
  },
  {
    title: "Crypt Beings",
    description: "A responsive multi-platform Flutter app with sleek UI and secure user authentication using Firebase. Enables users to create and manage wallets on Ethereum and Solana blockchains.",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55",
    liveLink: "https://cryptbeings-apk.vercel.app/",
    githubLink: "https://github.com/mayank-1007/CryptBeings",
    technologies: ["Flutter", "Firebase", "Firebase Authentication", "Dart", "Ethereum", "Solana", "Web3.0", "Blockchain"],
    longDescription: "Engineered responsive multi platform flutter app, sleek UI, secure user authentication using Firebase, including fingerprint. Wallet Functionality: Enabled users to create and manage wallets on Ethereum and Solana blockchains, with wallet data securely stored in Firebase. Planned updates to introduce a proprietary blockchain, support for additional tokens and NFTs, as well as transaction capabilities between wallets."
  },
  {
    title: "Int–O–view",
    description: "An AI-powered interview platform using advanced LLMs that simulates real interview scenarios using user's resumes and conversations, providing personalized feedback and insightful user dashboard.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    liveLink: "https://int-o-view.vercel.app/",
    githubLink: "https://github.com/mayank-1007/Int-O-view",
    technologies: ["React.js", "Express.js", "Node.js", "Machine Learning", "JavaScript", "Python", "Large Language Models (LLMs)", "Llama model", "JWT", "TTS"],
    longDescription: "Constructed an AI-powered interview platform using advanced LLMs that simulates real interview scenarios using user's resumes and conversations finally provides personalized feedback, and insightful user dashboard. (Collaboration Project with a team of 5 developers). Additionally, it could streamline the recruitment process for companies by offering analytics and candidate insights, making hiring more efficient."
  },
  {
    title: "Coverage Determination",
    description: "Performed multivariate Time-Series forecasting on a Cloud Coverage Dataset using Transformer, Residual Modeling, and RNN models, achieving a good R1 score.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    liveLink: "#",
    githubLink: "#",
    technologies: ["Image Segmentation", "Tensorflow", "Scikit-learn", "Python", "Machine Learning"],
    longDescription: "Performed multivariate Time-Series forecasting on a Cloud Coverage Dataset. Utilized Transformer, Residual Modeling, RNN models, achieved a good R1 score. Crafted models to predict cloud coverage for various intervals training on 4+ hours of historical data."
  },
  {
    title: "Spotify Clone",
    description: "A full-featured Spotify clone, leveraging Next.js and Tailwind CSS for responsiveness. Integrated Supabase as a SQL database and Stripe for payments.",
    image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff",
    liveLink: "https://spotify-clone-ivory.vercel.app/",
    githubLink: "https://github.com/mayank-1007/spotify-clone",
    technologies: ["NextJS 13.4", "React.js", "Stripe", "Supabase", "PostgreSQL", "Tailwind CSS", "JavaScript"],
    longDescription: "Architected and implemented a full-featured Spotify clone, leveraging Next.js and Tailwind CSS for responsiveness. Integrated Supabase as a SQL database, used Stripe for payments achieving a 99% uptime and enhanced performance and scalability."
  }
];

const backgroundPatterns = [
  "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 to-transparent",
  "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/20 to-transparent",
  "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-accent/20 to-transparent",
  "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-secondary/10 to-transparent",
  "bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-secondary/10 via-accent/10 to-transparent",
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [open, setOpen] = useState(false);

  const handleShowDetails = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/60 backdrop-blur-sm">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and technical expertise across various technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <h3 className="text-xl font-bold text-white drop-shadow-md">{project.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <motion.div key={i} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20 border-primary/30">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                    {project.technologies.length > 3 && (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Badge variant="outline" className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                          +{project.technologies.length - 3}
                        </Badge>
                      </motion.div>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <motion.a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </motion.a>
                      <motion.a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="h-5 w-5" />
                        <span className="sr-only">Live Demo</span>
                      </motion.a>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="font-medium text-primary hover:text-primary/80 hover:bg-primary/10"
                        onClick={() => handleShowDetails(project)}
                      >
                        Details
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Dialog */}
      <AnimatePresence>
        {selectedProject && open && (
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-4xl p-0 overflow-hidden border border-primary/30 bg-card/95 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className={`relative ${backgroundPatterns[Math.floor(Math.random() * backgroundPatterns.length)]}`}
              >
                <button 
                  onClick={() => setOpen(false)} 
                  className="absolute top-4 right-4 z-50 bg-background/80 rounded-full p-1 hover:bg-background transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
                
                <div className="relative h-64 sm:h-80 overflow-hidden">
                  <div className="absolute inset-0">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h2 className="text-3xl font-display font-bold text-foreground">
                      {selectedProject.title}
                    </h2>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="mb-6">
                    <p className="text-base text-muted-foreground mb-6">
                      {selectedProject.longDescription}
                    </p>
                    
                    <h4 className="text-lg font-semibold mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {selectedProject.technologies.map((tech, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                          whileHover={{ y: -2, scale: 1.05 }}
                        >
                          <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/30">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <motion.a 
                        href={selectedProject.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Button className="cyber-border relative overflow-hidden group">
                          <span className="relative z-10">Live Demo</span>
                          <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-80 group-hover:opacity-100 transition-opacity"></span>
                          <ExternalLink className="ml-2 h-4 w-4 relative z-10" />
                        </Button>
                      </motion.a>
                      
                      <motion.a 
                        href={selectedProject.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Button variant="outline" className="border-primary hover:bg-primary/10 overflow-hidden group">
                          <span className="relative z-10">View Code</span>
                          <Github className="ml-2 h-4 w-4" />
                        </Button>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
}
