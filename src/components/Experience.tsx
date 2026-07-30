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
      period: 'Jan 2023 - Present',
      location: 'Bangkok, Thailand',
      type: 'current',
      highlights: [
        'Own Agoda\'s global analytics platform processing around 4B events/day across 190+ countries',
        'Designed real-time anomaly detection, reducing mean time to detect data-quality issues by about 60%',
        'Built an analytics testing framework that cut production analytics bugs by 15%',
        'Built an ETL pipeline for self-service engagement metrics from raw event data',
        'Built real-time PII detection and masking with Legal and Compliance for GDPR/PDPA compliance',
      ],
      impact: [
        'Serves product, marketing, and data-science teams globally',
        'Built monitoring and alerting dashboards to catch anomalies before customer impact',
        'Standardized automated onboarding for teams adopting the analytics platform',
        'Extended consistent event tracking across the WebView-native bridge',
      ],
    },
    {
      company: 'Enosis Solutions',
      role: 'Senior Software Engineer',
      period: 'Jan 2022 - Dec 2022',
      location: 'Dhaka, Bangladesh',
      type: 'past',
      highlights: [
        'Led a two-person team rebuilding a legacy Perl work-order system in .NET',
        'Designed a .NET service architecture with clean separation of concerns',
      ],
      impact: [
        'Met the delivery deadline with zero data loss',
        'Reduced downtime after launch',
      ],
    },
    {
      company: 'Enosis Solutions',
      role: 'Software Engineer',
      period: 'Mar 2019 - Dec 2021',
      location: 'Dhaka, Bangladesh',
      type: 'past',
      highlights: [
        'Integrated core products with Oracle, SAP, and DELTEK for enterprise data flow',
        'Built a queuing system for data synchronization to replace a nightly batch job',
      ],
      impact: [
        'Unblocked client onboardings waiting on enterprise integrations',
        'Improved synchronization speed and reliability by about 50%',
      ],
    },
  ];

  const education = {
    degree: 'B.Sc. Computer Science and Engineering',
    university: 'Military Institute of Science and Technology (MIST)',
    period: 'Feb 2015 - Mar 2019',
    location: 'Dhaka, Bangladesh',
    highlights: [
      'Military Institute of Science and Technology (MIST), Dhaka',
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
