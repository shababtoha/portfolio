import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Skill {
  name: string;
  category: string;
}

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills: Skill[] = [
    { name: 'TypeScript / JavaScript', category: 'Languages & Core' },
    { name: 'Node.js', category: 'Languages & Core' },
    { name: '.NET / C#', category: 'Languages & Core' },
    { name: 'Python', category: 'Languages & Core' },
    { name: 'Java', category: 'Languages & Core' },
    { name: 'C/C++', category: 'Languages & Core' },
    { name: 'Kafka', category: 'Data & Distributed Systems' },
    { name: 'Hadoop', category: 'Data & Distributed Systems' },
    { name: 'Redis', category: 'Data & Distributed Systems' },
    { name: 'SQL / Oracle', category: 'Data & Distributed Systems' },
    { name: 'Event-Driven Architecture', category: 'Data & Distributed Systems' },
    { name: 'Real-Time Data Pipelines', category: 'Data & Distributed Systems' },
    { name: 'System Design & Architecture', category: 'Problem Solving & Engineering' },
    { name: 'Algorithms & Data Structures', category: 'Problem Solving & Engineering' },
    { name: 'CI/CD & DevOps', category: 'Problem Solving & Engineering' },
    { name: 'Testing & Quality Engineering', category: 'Problem Solving & Engineering' },
    { name: 'Observability & Monitoring', category: 'Problem Solving & Engineering' },
    { name: 'GDPR/PDPA Compliance', category: 'Problem Solving & Engineering' },
  ];

  const categories = ['Languages & Core', 'Data & Distributed Systems', 'Problem Solving & Engineering'];

  return (
    <section id="skills" ref={ref} className="py-20 md:py-32 bg-dark-lighter/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Toolkit</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Generalist problem solver with deep system thinking. I learn what's needed to solve the problem at hand—not tied to any single framework or stack.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                <span className="text-gradient">{category}</span>
              </h3>

              <div className="flex flex-wrap gap-3">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.2 + index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 bg-dark rounded-lg text-gray-300 border border-white/10 hover:border-primary/50 hover:text-primary transition-all"
                    >
                      {skill.name}
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 glass rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            <span className="text-gradient">Cross-Domain Experience</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'AWS', 'SAP', 'DELTEK', 'Machine Learning', 'Computer Architecture', 'Network Protocols', 'Database Internals', 'Performance Optimization', 'Microservices'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-3 glass rounded-full text-gray-300 hover:text-primary hover:border-primary/50 border border-white/10 transition-all cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;


