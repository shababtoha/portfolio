import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Briefcase, Award, Trophy, User, X, ZoomIn } from 'lucide-react';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const stats = [
    { icon: Briefcase, label: 'Production Experience', value: '6+ Yrs' },
    { icon: Award, label: 'Events Processed Daily', value: '4B+' },
    { icon: Trophy, label: 'LeetCode Problems Solved', value: '500+' },
    { icon: User, label: 'Incident Response Faster', value: '-40%' },
  ];

  return (
    <section id="about" ref={ref} className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
              <div className="relative z-10">
                <div
                  className="w-full aspect-square rounded-xl overflow-hidden cursor-pointer relative"
                  onClick={() => setIsImageModalOpen(true)}
                >
                  <img
                    src="/shababtoha.jpg"
                    alt="Shabab Hasnat Toha"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ imageRendering: '-webkit-optimize-contrast' }}
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={48} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold mb-4 text-white">Data-Driven Engineer with Full Ownership Mindset</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              <span className="text-white font-semibold">Full-stack ownership</span> of mission-critical analytics platforms at Agoda,
              processing <span className="text-primary font-semibold">4B+ events daily</span>. I combine competitive programming
              fundamentals with production systems expertise to deliver measurable business impact.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              My engineering philosophy: <span className="text-white font-semibold">measure everything, optimize relentlessly</span>.
              From distributed event pipelines to real-time monitoring systems, I build with observability-first approach and
              data-backed decision making.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Led cross-team initiatives, mentored junior engineers, established testing standards, and drove GDPR/PDPA compliance
              across data platforms. Strong background in competitive programming (ACM ICPC, online judges) translates to
              efficient algorithm design and system optimization.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="glass rounded-xl p-4 text-center hover:bg-white/10 transition-all"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setIsImageModalOpen(false)}
          >
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
              onClick={() => setIsImageModalOpen(false)}
            >
              <X size={24} className="text-white" />
            </motion.button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="/shababtoha.jpg"
                alt="Shabab Hasnat Toha - Full View"
                className="w-full h-auto rounded-xl shadow-2xl"
                style={{ imageRendering: '-webkit-optimize-contrast', maxHeight: '90vh', objectFit: 'contain' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;


