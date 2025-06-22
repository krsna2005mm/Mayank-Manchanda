
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, ExternalLink, Calendar, MapPin, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const featuredProjects = [
  {
    title: "RepHelp",
    description: "Reception management platform reducing wait time by 35% with OCR scanning and automated data entry",
    image: "images/rephelp.png",
    tech: ["Next.js", "React", "TypeScript", "Appwrite"],
    liveLink: "https://rephelp.netlify.app/",
    githubLink: "https://github.com/mayank-1007/RepHelp"
  },
  {
    title: "Int–O–view",
    description: "AI-powered interview platform using LLMs for personalized feedback and real interview simulations",
    image: "images/interoview.png",
    tech: ["React.js", "Node.js", "Machine Learning", "LLMs"],
    liveLink: "https://int-o-view.vercel.app/",
    githubLink: "https://github.com/mayank-1007/Int-O-view"
  },
  {
    title: "Crypt Beings",
    description: "Multi-platform Flutter app for creating and managing Ethereum and Solana wallets",
    image: "images/cryptbeings.jpg",
    tech: ["Flutter", "Firebase", "Web3.0", "Blockchain"],
    liveLink: "https://cryptbeings-apk.vercel.app/",
    githubLink: "https://github.com/mayank-1007/CryptBeings"
  }
];

const achievements = [
  { platform: "Codeforces", rating: "1415", rank: "Specialist" },
  { platform: "LeetCode", rating: "1864", rank: "Knight" },
  { platform: "CodeChef", rating: "1606", rank: "3 Star" }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />

      {/* About Me Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a Computer Science student at Delhi Technological University with a passion for 
                building innovative web applications and solving complex problems. With a CGPA of 8.99 
                and strong competitive programming background, I combine theoretical knowledge with 
                practical development skills.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Projects Built</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-2xl font-bold text-primary">1400+</div>
                  <div className="text-sm text-muted-foreground">Problems Solved</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-2xl font-bold text-primary">2</div>
                  <div className="text-sm text-muted-foreground">Internships</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in full-stack development, 
              AI/ML, and blockchain technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full group hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Live
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/projects">
              <Button size="lg" variant="outline">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills & Achievements */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {["C++", "JavaScript", "TypeScript", "Python", "Dart"].map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React.js", "Next.js", "Tailwind CSS", "Flutter"].map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Backend & Database</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase"].map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Link to="/skills">
                  <Button variant="outline">
                    View Detailed Skills
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Competitive Programming</h3>
              <div className="space-y-4">
                {achievements.map((achievement) => (
                  <Card key={achievement.platform}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold">{achievement.platform}</div>
                          <div className="text-sm text-muted-foreground">{achievement.rank}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary">{achievement.rating}</div>
                          <div className="text-xs text-muted-foreground">Max Rating</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Award className="h-4 w-4 text-primary" />
                  <span>Brainwave Finalist - Top 10/500+ teams</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Award className="h-4 w-4 text-primary" />
                  <span>SIH 2024 Internal Round Selected</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Education & Experience</h2>
          </motion.div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">Delhi Technological University</h3>
                    <p className="text-muted-foreground">B.Tech Computer Science</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>2023 - 2027</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>Delhi, India</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-lg font-bold">
                    8.99 CGPA
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Link to="/about">
              <Button variant="outline">
                Learn More About Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="mailto:mayankmanchanda2005@gmail.com">
                <Button size="lg" variant="outline">
                  Send Email
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
