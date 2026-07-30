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
    { name: 'Java', category: 'Languages & Core' },
    { name: 'C#', category: 'Languages & Core' },
    { name: 'JavaScript / TypeScript', category: 'Languages & Core' },
    { name: 'Python', category: 'Languages & Core' },
    { name: 'C/C++', category: 'Languages & Core' },
    { name: 'SQL', category: 'Languages & Core' },
    { name: 'Java Spring', category: 'Backend & Frameworks' },
    { name: '.NET Core / .NET', category: 'Backend & Frameworks' },
    { name: 'Node Express', category: 'Backend & Frameworks' },
    { name: 'Django', category: 'Backend & Frameworks' },
    { name: 'Apache Kafka', category: 'Data & Streaming' },
    { name: 'Apache Hadoop', category: 'Data & Streaming' },
    { name: 'Redis', category: 'Data & Streaming' },
    { name: 'Apache Spark', category: 'Data & Streaming' },
    { name: 'SQL/NoSQL', category: 'Data & Streaming' },
    { name: 'Docker', category: 'Cloud & Infrastructure' },
    { name: 'Kubernetes', category: 'Cloud & Infrastructure' },
    { name: 'GitLab CI/CD', category: 'Cloud & Infrastructure' },
    { name: 'React', category: 'Frontend' },
    { name: 'Distributed Systems', category: 'Engineering Domains' },
    { name: 'Data Pipelines / ETL', category: 'Engineering Domains' },
    { name: 'Observability', category: 'Engineering Domains' },
    { name: 'System Design', category: 'Engineering Domains' },
  ];

  const categories = ['Languages & Core', 'Backend & Frameworks', 'Data & Streaming', 'Cloud & Infrastructure', 'Frontend', 'Engineering Domains'];

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      </div>
    </section>
  );
};

export default Skills;


