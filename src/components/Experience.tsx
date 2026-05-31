import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'current' | 'past';
  highlights: string[];
  impact: string[];
}

const Experience: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences: ExperienceItem[] = [
    {
      company: 'Agoda',
      role: 'Senior Software Engineer',
      period: 'Feb 2022 - Present',
      location: 'Bangkok, Thailand',
      type: 'current',
      highlights: [
        'Full ownership of internal analytics platform processing 4B+ events/day',
        'Led real-time bug detection system reducing incident response time by 40%',
        'Built analytics testing library adopted across 10+ services',
        'Drove GDPR/PDPA compliance for sensitive data flows',
        'Mentored 5+ engineers across backend and analytics domains',
      ],
      impact: [
        'Platform serves all product teams globally for journey analytics',
        'Maintained 99.9%+ uptime while scaling 3x event volume',
        'Improved data accuracy by 20% through systematic validation',
        'Reduced analytics defects by 15% through testing standards',
      ],
    },
    {
      company: 'Enosis Solutions',
      role: 'Software Engineer',
      period: 'May 2019 - Jan 2022',
      location: 'Dhaka, Bangladesh',
      type: 'past',
      highlights: [
        'Led enterprise system integrations for US-based clients (SAP, DELTEK, Oracle)',
        'Built full-stack applications in .NET, Node.js, and React',
        'Designed and implemented RESTful APIs serving 100K+ requests/day',
        'Established CI/CD pipelines reducing deployment time from hours to minutes',
        'Collaborated with offshore teams across multiple time zones',
      ],
      impact: [
        'Successfully delivered 8+ major client projects on time',
        'Reduced client operational costs by automating manual workflows',
        'Improved system performance by 50% through optimization',
        'Earned fast-track promotion to senior developer role',
      ],
    },
  ];

  const education = {
    degree: 'Bachelor of Science in Computer Science & Engineering',
    university: 'Military Institute of Science and Technology (MIST)',
    period: '2014 - 2018',
    location: 'Dhaka, Bangladesh',
    highlights: [
      'Strong foundation in algorithms, data structures, and computer architecture',
      'Competed in ACM ICPC programming contests',
      'Relevant coursework: Distributed Systems, Database Systems, Machine Learning',
      'Active member of programming club and competitive programming community',
    ],
  };

  return (
    <section id="experience" ref={ref} className="py-20 md:py-32 bg-dark-lighter/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Career <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            From early career enterprise development to owning high-scale analytics platforms at Agoda—
            a journey of continuous learning and increasing impact.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-12 mb-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="glass rounded-2xl p-8 hover:bg-white/10 transition-all">
                {/* Company Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                      {exp.type === 'current' && (
                        <span className="px-3 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-xs font-semibold">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-xl text-gradient font-semibold">{exp.role}</p>
                  </div>
                  <div className="mt-3 md:mt-0 text-gray-400 text-sm space-y-1">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-primary" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-primary" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights and Impact Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Briefcase size={18} className="text-primary" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                          <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <ChevronRight size={18} className="text-secondary rotate-90" />
                      Business Impact
                    </h4>
                    <ul className="space-y-2">
                      {exp.impact.map((item, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-secondary mt-0.5">●</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="text-gradient">Education</span>
          </h3>

          <div className="glass rounded-2xl p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">{education.degree}</h4>
                <p className="text-xl text-primary font-semibold">{education.university}</p>
              </div>
              <div className="mt-3 md:mt-0 text-gray-400 text-sm space-y-1">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-primary" />
                  <span>{education.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  <span>{education.location}</span>
                </div>
              </div>
            </div>

            <ul className="grid md:grid-cols-2 gap-3">
              {education.highlights.map((highlight, idx) => (
                <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                  <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Career Progression Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 glass rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-gradient">Career Philosophy</span>
          </h3>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
            Started building enterprise applications, evolved into distributed systems and analytics platforms.
            Every role taught me something new—but the constant is <span className="text-white font-semibold">ownership</span>,
            <span className="text-white font-semibold"> impact</span>, and
            <span className="text-white font-semibold"> continuous learning</span>.
            I seek challenges that push me to grow while delivering tangible business value.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

