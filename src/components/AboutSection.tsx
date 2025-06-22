
import { motion } from 'framer-motion';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold tracking-tight mb-3">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Computer Science student and competitive programmer with expertise in full-stack development and problem-solving.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Education
            </h3>
            
            <div className="space-y-4">
              <Card className="border border-border/50 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold">Delhi Technological University</h4>
                      <p className="text-sm text-muted-foreground">B.Tech Computer Science</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">8.99 CGPA</div>
                      <div className="text-xs text-muted-foreground">2023-2027</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border/50 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold">Summer Fields School</h4>
                      <p className="text-sm text-muted-foreground">High School</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">93.8%</div>
                      <div className="text-xs text-muted-foreground">2009-2023</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Achievements
            </h3>
            
            <Card className="border border-border/50 shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2 border-b border-border/30 last:border-b-0">
                    <div>
                      <div className="font-medium">Specialist</div>
                      <div className="text-sm text-muted-foreground">Codeforces (1415)</div>
                    </div>
                    <a 
                      href="https://codeforces.com/profile/mayankmanchanda2005" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  
                  <div className="flex items-center justify-between py-2 border-b border-border/30 last:border-b-0">
                    <div>
                      <div className="font-medium">Knight</div>
                      <div className="text-sm text-muted-foreground">LeetCode (1864)</div>
                    </div>
                    <a 
                      href="https://leetcode.com/u/mayankmanchanda2005/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  
                  <div className="flex items-center justify-between py-2 border-b border-border/30 last:border-b-0">
                    <div>
                      <div className="font-medium">3 Star</div>
                      <div className="text-sm text-muted-foreground">CodeChef (1606)</div>
                    </div>
                    <a 
                      href="https://www.codechef.com/users/mayank2005" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  
                  <div className="flex items-center justify-between py-2 border-b border-border/30 last:border-b-0">
                    <div>
                      <div className="font-medium">Brainwave Finalist</div>
                      <div className="text-sm text-muted-foreground">Top 10/500+ teams</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <div className="font-medium">SIH 2024</div>
                      <div className="text-sm text-muted-foreground">Internal Round Selected</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
