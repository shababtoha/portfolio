import { useEffect } from 'react';
import Background from './components/Background';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Navigation from './components/Navigation';
import Resume from './components/Resume';
import Skills from './components/Skills';
import { profile } from './content';

function Footer() {
  return (
    <footer className="border-t border-line" role="contentinfo">
      <div className="mx-auto flex max-w-page flex-col gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 font-semibold">
          <a className="hover:text-ink" href={`mailto:${profile.email}`}>Email</a>
          <a className="hover:text-ink" href={profile.phoneHref}>{profile.phoneDisplay}</a>
          <a className="hover:text-ink" href={profile.linkedin} target="_blank" rel="me noopener noreferrer">LinkedIn</a>
          <a className="hover:text-ink" href={profile.github} target="_blank" rel="me noopener noreferrer">GitHub</a>
          <a className="hover:text-ink" href={profile.resumePath} download={profile.resumeFileName}>Resume</a>
        </nav>
      </div>
    </footer>
  );
}

export default function App() {
  const isResume = window.location.pathname === '/resume' || window.location.pathname === '/resume/';

  useEffect(() => {
    if (!isResume) {
      document.title = 'Shabab Hasnat Toha — Senior Backend Engineer';
    }
  }, [isResume]);

  if (isResume) return <Resume />;

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <Highlights />
        <Experience />
        <Skills />
        <Background />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
