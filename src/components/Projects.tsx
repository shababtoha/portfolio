import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Activity, ShieldCheck, TestTube2, Workflow } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Project {
  title: string;
  description: string[];
  tags: string[];
  icon: LucideIcon;
  featured: boolean;
}

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects: Project[] = [
    {
      title: 'Owned Agoda Internal Analytics Platform',
      description: [
        'Owned a core in-house analytics platform used across teams globally.',
        'Handled pipeline operations at around 4B events per day for business-critical insights.',
      ],
      tags: ['Node.js', 'TypeScript', 'Distributed Systems'],
      icon: Activity,
      featured: true,
    },
    {
      title: 'Real-Time Bug Detection and Alerting',
      description: [
        'Designed an event-driven anomaly detection system for post-production analytics bugs.',
        'Added real-time alerting + dashboards that helped reduce critical incident response time by 40%.',
      ],
      tags: ['Event-Driven', 'Monitoring', 'Dashboards'],
      icon: Workflow,
      featured: true,
    },
    {
      title: 'Analytics Testing Library',
      description: [
        'Built a reusable analytics testing library adopted across multiple Agoda services.',
        'Improved test coverage and reliability, reducing post-release analytics defects by 15%.',
      ],
      tags: ['Testing', 'Quality Engineering', 'Developer Experience'],
      icon: TestTube2,
      featured: true,
    },
    {
      title: 'Privacy-First Data Compliance',
      description: [
        'Partnered with legal and compliance teams to enforce GDPR/PDPA controls in analytics pipelines.',
        'Implemented real-time PII detection and prevention to reduce exposure risk and improve audit readiness.',
      ],
      tags: ['GDPR', 'PDPA', 'Data Governance'],
      icon: ShieldCheck,
      featured: false,
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Career <span className="text-gradient">Impact</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Selected outcomes from roles at Agoda and Enosis Solutions, focused on scale, reliability, and engineering quality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden group hover:shadow-xl hover:shadow-primary/15 transition-all duration-300"
            >
              <div className="relative h-32 overflow-hidden bg-dark-lighter flex items-center px-6">
                <project.icon size={40} className="text-primary" />
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-xs font-semibold">
                      Highlight
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <ul className="text-gray-400 text-sm mb-5 space-y-2 list-disc list-inside">
                  {project.description.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-dark rounded-full text-xs text-gray-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


