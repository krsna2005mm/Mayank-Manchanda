
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C++", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 80 },
      { name: "Dart", level: 75 }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", level: 90 },
      { name: "React.js", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML/CSS", level: 90 },
      { name: "Flutter", level: 75 }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "Django", level: 70 },
      { name: "RESTful APIs", level: 90 },
      { name: "GraphQL", level: 75 }
    ]
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 }
    ]
  }
];

const progressVariants = {
  hidden: { width: 0 },
  visible: level => ({
    width: `${level}%`,
    transition: { duration: 1.2, ease: "easeOut", delay: 0.3 }
  })
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency in various technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow h-full bg-card/80 backdrop-blur overflow-hidden">
                <CardContent className="p-6">
                  <motion.h3 
                    className="text-xl font-bold mb-6 relative"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    {category.title}
                    <motion.span
                      className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-secondary"
                      initial={{ width: 0 }}
                      whileInView={{ width: "3rem" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </motion.h3>
                  
                  <motion.div 
                    className="space-y-5"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {category.skills.map((skill, i) => (
                      <motion.div key={i} variants={item}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <motion.span 
                            className="text-sm text-gray-500"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 + (i * 0.1) }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className={
                              index % 4 === 0 ? "h-full bg-gradient-to-r from-purple-600 to-purple-400" :
                              index % 4 === 1 ? "h-full bg-gradient-to-r from-primary to-primary/70" :
                              index % 4 === 2 ? "h-full bg-gradient-to-r from-orange-500 to-amber-400" :
                              "h-full bg-gradient-to-r from-secondary to-secondary/70"
                            }
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={skill.level}
                            variants={progressVariants}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12"
        >
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur">
            <CardContent className="p-6">
              <motion.h3 
                className="text-xl font-bold mb-6 relative"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Advanced Concepts & Technologies
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-secondary"
                  initial={{ width: 0 }}
                  whileInView={{ width: "3rem" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </motion.h3>
              
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "Data Structures & Algorithms",
                  "Machine Learning",
                  "Large Language Models (LLMs)",
                  "Blockchain",
                  "Web3.0",
                  "Cloud Computing",
                  "Linux",
                  "API Development",
                  "Software Engineering",
                  "OOP",
                  "Database Management",
                  "Computer Networks",
                  "Computer Architecture",
                  "Figma UI/UX Design"
                ].map((concept, i) => (
                  <motion.div 
                    key={i}
                    variants={item}
                    whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                    className="bg-card dark:bg-gray-800 p-3 rounded-lg flex items-center justify-center text-center border border-primary/10 hover:border-primary/30 transition-colors"
                  >
                    <span className="text-sm font-medium">{concept}</span>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
