import { ArrowLeft, Download } from 'lucide-react';
import { useEffect } from 'react';
import { profile } from '../content';
import ThemeToggle from './ThemeToggle';

export default function Resume() {
  useEffect(() => {
    document.title = 'Resume — Shabab Hasnat Toha';
  }, []);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <header className="sticky top-0 z-40 border-b border-line bg-canvas">
        <div className="h-1 bg-accent" aria-hidden="true" />
        <div className="mx-auto flex h-16 max-w-page items-center justify-between gap-4 px-5 sm:px-8">
          <a href="/" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-muted hover:text-ink">
            <ArrowLeft size={16} aria-hidden="true" />
            Back to portfolio
          </a>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href={profile.resumePath} download={profile.resumeFileName} className="btn btn-primary">
              <Download size={16} aria-hidden="true" />
              Download PDF
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-page px-5 py-10 sm:px-8">
        <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.18em] text-accent">Resume</p>
        <h1 className="mt-2 font-serif text-4xl text-ink sm:text-5xl">{profile.name}</h1>
        <p className="mt-3 max-w-3xl text-lg text-muted">{profile.headline}</p>

        <div className="mt-8 overflow-hidden rounded-md border border-line bg-white">
          <object
            data={`${profile.resumePath}#navpanes=0&view=FitH`}
            type="application/pdf"
            className="h-[75vh] min-h-[32rem] w-full"
            aria-label="Shabab Hasnat Toha resume PDF"
          >
            <div className="flex min-h-64 flex-col items-center justify-center gap-4 bg-canvas p-8 text-center">
              <p className="text-muted">This browser cannot show the PDF inline.</p>
              <a href={profile.resumePath} className="btn btn-primary" target="_blank" rel="noreferrer">
                Open the resume
              </a>
            </div>
          </object>
        </div>
      </main>
    </div>
  );
}
