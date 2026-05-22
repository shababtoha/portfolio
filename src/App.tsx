import { Github, Linkedin, Mail } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import CompetitiveProgramming from './components/CompetitiveProgramming';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="relative min-h-screen bg-dark overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-lighter to-dark"></div>
        <div className="absolute top-0 -left-4 w-64 h-64 bg-primary/15 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute top-0 -right-4 w-64 h-64 bg-secondary/15 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        <Navigation />
        <main role="main">
          <Hero />
          <About />
          <Experience />
          <Leadership />
          <CompetitiveProgramming />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <footer className="border-t border-white/10 py-8" role="contentinfo">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2026 Shabab Hasnat Toha. All rights reserved.
              </p>
              <div className="flex gap-6" role="navigation" aria-label="Social media links">
                <a href="https://github.com/shababtoha" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-primary transition-colors"
                   aria-label="Visit Shabab's GitHub profile">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/shababtoha" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-primary transition-colors"
                   aria-label="Visit Shabab's LinkedIn profile">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:shabab.toha@gmail.com"
                   className="text-gray-400 hover:text-primary transition-colors"
                   aria-label="Send email to Shabab">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
