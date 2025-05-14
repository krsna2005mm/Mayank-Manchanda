
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">{category.title}</h3>
                  <div className="space-y-5">
                    {category.skills.map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <Progress
                          value={skill.level}
                          className="h-2"
                          indicatorClassName={
                            index % 4 === 0 ? "bg-purple-gradient" :
                            index % 4 === 1 ? "bg-blue-gradient" :
                            index % 4 === 2 ? "bg-orange-gradient" :
                            "bg-secondary"
                          }
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">Advanced Concepts & Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
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
                  <div 
                    key={i}
                    className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg flex items-center justify-center text-center"
                  >
                    <span className="text-sm font-medium">{concept}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
