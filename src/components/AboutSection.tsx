
import { motion } from 'framer-motion';
import { Award, BookOpen, Calendar, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A passionate full-stack developer and computer science student with a strong foundation in modern web technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-display font-bold mb-4">
              Education & Background
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm currently pursuing my Bachelor's in Computer Science at Delhi Technological University, 
              where I've maintained a CGPA of 8.99/10. My academic journey is complemented by practical 
              experience in building innovative web and mobile applications.
            </p>

            <div className="space-y-4">
              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Delhi Technological University</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">B.Tech in Computer Science (CSE)</p>
                    <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      August 2023 - May 2027
                    </div>
                    <p className="text-sm mt-1">CGPA: 8.99/10.00</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full">
                    <BookOpen className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Summer Fields School</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">High School</p>
                    <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      March 2009 - March 2023
                    </div>
                    <p className="text-sm mt-1">Grade XII: 93.8% <br/>Grade X: 97.49%</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-bold mb-4">
              {/* Skills & Expertise */}
              Profiles & Achievements
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              <p>I specialize in building modern, responsive, and high-performance web applications
              using cutting-edge technologies. My expertise spans full-stack development,
              with a focus on creating seamless user experiences.</p>
              <p>I have been actively participating in various coding competitions and hackathons,
              where I have honed my problem-solving skills and gained practical experience in software development.</p>
              {/* <p>
              I am also a passionate learner, always eager to explore new technologies and frameworks.</p> */}
              <p>
              I have a strong foundation in data structures and algorithms, which I apply to solve complex problems efficiently.  </p>
            </p>

            {/* <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow mb-6">
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2">
                  {[
                    'Next.js', 'React', 'Node.js', 'Express', 'TypeScript', 
                    'JavaScript', 'Python', 'C++', 'MongoDB', 'PostgreSQL',
                    'Django', 'Flutter', 'Dart', 'AWS', 'Docker', 'Git',
                    'Machine Learning', 'Blockchain', 'Web3.0', 'Firebase',
                  ].map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card> */}

            <div className="space-y-4">
              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Contest Achievements</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc list-inside mt-2 space-y-1">
                      <li>Specialist at <Link to='https://codeforces.com/profile/mayankmanchanda2005' className="text-accent hover:underline dark:text-accent">Codeforces</Link> (1415)</li>
                      <li>Knight at <Link to='https://leetcode.com/u/mayankmanchanda2005/' className="text-accent hover:underline dark:text-accent ">Leetcode</Link> (1864)</li>
                      <li>3 Star at <Link to='https://www.codechef.com/users/mayank2005' className="text-accent hover:underline dark:text-accent">CodeChef</Link> (1606)</li>
                      <li>Brown at <Link to='https://atcoder.jp/users/mayank_2005' className="text-accent hover:underline dark:text-accent">AtCoder</Link> (791)</li>
                      <li>Finalist (top 10 out of 500+ teams) at Brainwave hackathon</li>
                      <li>Selected for Internal Round of Smart India Hackathon (SIH-2024)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
