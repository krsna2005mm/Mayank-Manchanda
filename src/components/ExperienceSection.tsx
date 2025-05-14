
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const experiences = [
  {
    title: "Research Internship under Science and Technology Vertical",
    company: "NITI Aayog",
    location: "On-Site (Niti Bhawan, New Delhi)",
    period: "December 2024 - January 2025",
    description: [
      "Played a key role in building the R & D portal as a part of plan by PMO India.",
      "Conducted research and identified suitable areas to set up S&T hubs in India. My listed draft added more than 5 significant cities to their final report.",
      "Evaluated various funding schemes under the FOF project of the Indian Government.",
      "Studied about Horizon Europe's 96 billion € distribution and impact in their deeptech sector.",
      "Authored a report on using ML to enhance economic policy analysis, showing superior analytics for datasets over 10³⁰ entries."
    ],
    certificate: "Certificate",
    certificateLink: "#"
  },
  {
    title: "Robotics Training and Internship",
    company: "Teachnook",
    location: "Remote",
    period: "November 2023 - January 2024",
    description: [
      "Successfully completed a 12-week training program focusing on Arduino and various other microcontrollers and sensors.",
      "Deployed 5+ Arduino-based projects based on Arduino and ESP8266(WIFI Module)."
    ],
    certificate: "Certificate",
    certificateLink: "#"
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey through internships and professional experiences that have shaped my skills.
          </p>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-primary/70 before:to-transparent">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-start md:justify-center"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary bg-white dark:bg-gray-900 shadow-md z-10 md:mx-0">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>

              <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-8 md:ml-0 md:mr-auto md:even:ml-auto md:even:mr-0 border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{experience.title}</h3>
                    <a 
                      href={experience.certificateLink} 
                      className="text-sm font-medium text-primary hover:underline inline-flex items-center"
                    >
                      {experience.certificate}
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-1">{experience.company}</h4>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="mr-4">{experience.location}</span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {experience.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                    {experience.description.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
