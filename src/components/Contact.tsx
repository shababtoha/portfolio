import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shabab.toha@gmail.com',
      href: 'mailto:shabab.toha@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bangkok, Thailand',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shababtoha/', label: 'LinkedIn' },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 md:py-32 bg-dark-lighter/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Open to impactful engineering roles and high-scale backend or analytics challenges.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Let's Talk</h3>
              <p className="text-gray-400 mb-8">
                If you are building data-heavy systems and need strong ownership in platform reliability,
                testing, and delivery, I'd love to connect.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 glass rounded-xl p-4 hover:bg-white/10 transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <info.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass rounded-lg flex items-center justify-center hover:bg-white/10 transition-all group hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="text-gray-400 group-hover:text-primary transition-colors" size={20} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;


