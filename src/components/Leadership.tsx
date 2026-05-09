import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Target, Lightbulb, TrendingUp, BookOpen, Shield } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface LeadershipItem {
  icon: LucideIcon;
  title: string;
  description: string;
  achievements: string[];
}

const Leadership: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const leadershipAreas: LeadershipItem[] = [
    {
      icon: Target,
      title: 'Platform Ownership',
      description: 'End-to-end ownership of mission-critical systems',
      achievements: [
        'Single owner of Agoda\'s internal analytics platform serving global teams',
        'Full responsibility for 4B+ daily events pipeline reliability and accuracy',
        'Drove architecture decisions impacting company-wide product analytics',
        'Maintained 99.9%+ uptime while scaling 3x event volume',
      ],
    },
    {
      icon: Users,
      title: 'Technical Mentorship',
      description: 'Growing engineering talent and team capabilities',
      achievements: [
        'Mentor to 5+ junior and mid-level engineers across backend and analytics',
        'Created onboarding playbooks reducing ramp-up time by 50%',
        'Regular tech talks on distributed systems and data engineering best practices',
        'Code review leadership—established team standards for quality and testing',
      ],
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Initiative',
      description: 'Identifying problems and driving solutions proactively',
      achievements: [
        'Proposed and built real-time bug detection system (reduced incident time -40%)',
        'Created reusable analytics testing library adopted across 10+ services',
        'Led GDPR/PDPA compliance initiative for sensitive data flows',
        'Championed observability improvements—dashboards now used company-wide',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Cross-Functional Leadership',
      description: 'Collaborating across teams to deliver business impact',
      achievements: [
        'Partner with Product, Data Science, and Legal teams on analytics requirements',
        'Led migration projects coordinating 4 engineering teams across time zones',
        'Drove data accuracy improvements directly impacting revenue optimization',
        'Bridge between technical and business stakeholders—translate requirements both ways',
      ],
    },
    {
      icon: BookOpen,
      title: 'Process & Standards',
      description: 'Building engineering excellence at scale',
      achievements: [
        'Established testing strategy increasing analytics reliability by 15%',
        'Created CI/CD pipelines reducing deployment time from hours to minutes',
        'Built documentation culture—comprehensive runbooks for all critical systems',
        'Introduced incident post-mortem process improving team learning velocity',
      ],
    },
    {
      icon: Shield,
      title: 'Data-Driven Decision Making',
      description: 'Using metrics to guide engineering choices',
      achievements: [
        'Every feature shipped with success metrics and monitoring dashboards',
        'A/B testing framework for platform changes—measure before scaling',
        'Performance optimization based on profiling data—not assumptions',
        'Built culture of "show me the data" in technical discussions and planning',
      ],
    },
  ];

  return (
    <section id="leadership" ref={ref} className="py-20 md:py-32 bg-dark-lighter/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Leadership & <span className="text-gradient">Impact</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            Beyond writing code—I drive technical vision, mentor engineers, and create leverage through process and platform improvements.
            Leadership is about multiplying impact across the team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadershipAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <area.icon className="text-primary" size={24} />
              </div>

              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-gradient transition-all">
                {area.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {area.description}
              </p>

              <ul className="space-y-2">
                {area.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Key Leadership Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 glass rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-gradient">My Leadership Philosophy</span>
          </h3>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
            <span className="text-white font-semibold">"Own the outcome, not just the code."</span> I believe great engineers
            take full responsibility for systems—from design to operations to business impact. Leadership means making others
            better, whether through mentorship, better tools, or clearer processes. I lead with data, communicate with clarity,
            and always ask "what's the leverage here?"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;

