import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Trophy, Zap, Award, Target, Brain } from 'lucide-react';

const CompetitiveProgramming: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      icon: Trophy,
      title: 'LeetCode',
      stat: 'Top 9% Globally',
      description: 'Ranked in the top 9% globally',
      details: [
        'Competitive programming experience reflected in the resume',
      ],
    },
    {
      icon: Award,
      title: 'Codeforces',
      stat: 'Expert (1686)',
      description: 'Maximum Codeforces rating of 1686',
      details: [
        'Expert-level competitive programming achievement',
      ],
    },
    {
      icon: Code2,
      title: 'Problem Solving',
      stat: 'Competitive Programming',
      description: 'Applied algorithmic thinking to production engineering',
      details: [
        'Strong algorithmic background supporting system design',
      ],
    },
  ];

  const algorithmicStrengths = [
    'Dynamic Programming',
    'Graph Algorithms',
    'Greedy Algorithms',
    'Binary Search & Two Pointers',
    'Tree & BST Operations',
    'Backtracking',
    'Bit Manipulation',
    'Sliding Window',
    'Hash Tables & Maps',
    'Heap & Priority Queue',
    'Union Find',
    'String Algorithms',
  ];

  return (
    <section id="competitive" ref={ref} className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Competitive <span className="text-gradient">Programming</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            Strong algorithmic foundation from competitive programming translates directly to production systems—
            efficient code, optimal data structures, and the ability to solve complex problems under constraints.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <achievement.icon className="text-primary" size={32} />
              </div>

              <h3 className="text-2xl font-bold mb-2 text-white">
                {achievement.title}
              </h3>

              <div className="text-3xl font-bold text-gradient mb-3">
                {achievement.stat}
              </div>

              <p className="text-gray-400 mb-4">
                {achievement.description}
              </p>

              <ul className="space-y-2 text-left">
                {achievement.details.map((detail, idx) => (
                  <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Why It Matters */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass rounded-2xl p-8 mb-12"
        >
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Brain className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                From Contests to Production Systems
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                <div>
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <Zap className="text-primary" size={16} />
                    Quick Problem Decomposition
                  </h4>
                  <p className="text-sm">
                    Competitive programming trained me to break down complex problems rapidly.
                    In production, this means faster root cause analysis and more efficient system design.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <Target className="text-primary" size={16} />
                    Performance-First Mindset
                  </h4>
                  <p className="text-sm">
                    Always thinking about time/space complexity. Led to major optimizations in analytics
                    pipelines—from O(n²) to O(n log n) saved hours of processing time daily.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <Code2 className="text-primary" size={16} />
                    Clean, Efficient Code
                  </h4>
                  <p className="text-sm">
                    Contest judges are unforgiving—code must be correct, efficient, and clean.
                    This discipline carries over to production code reviews and architecture decisions.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <Trophy className="text-primary" size={16} />
                    Edge Case Mastery
                  </h4>
                  <p className="text-sm">
                    Competitive programming teaches you to think adversarially about inputs.
                    Result: fewer production bugs, better error handling, more resilient systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Algorithmic Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6">
            <span className="text-gradient">Algorithmic Toolkit</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {algorithmicStrengths.map((strength, index) => (
              <motion.div
                key={strength}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.03 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-2 glass rounded-full text-gray-300 hover:text-primary hover:border-primary/50 border border-white/10 transition-all"
              >
                {strength}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;

