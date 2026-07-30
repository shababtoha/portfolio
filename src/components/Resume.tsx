import { ArrowLeft, Download, ExternalLink, FileText } from 'lucide-react';

const resumeUrl = '/Shabab_Toha_Resume.pdf';

const Resume: React.FC = () => (
  <div className="relative min-h-screen bg-dark text-white">
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-dark via-dark-lighter to-dark" />
    <header className="border-b border-white/10 bg-dark/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" className="inline-flex items-center gap-2 text-gray-300 transition-colors hover:text-primary">
          <ArrowLeft size={18} />
          Back to portfolio
        </a>
        <a
          href={resumeUrl}
          download="Shabab_Toha_Resume.pdf"
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-secondary px-4 py-2 font-semibold text-white transition-transform hover:scale-105"
        >
          <Download size={18} />
          Download PDF
        </a>
      </div>
    </header>

    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <div className="mb-3 inline-flex items-center gap-2 text-primary">
          <FileText size={20} />
          <span className="font-semibold">Resume</span>
        </div>
        <h1 className="text-3xl font-bold sm:text-5xl">Shabab Hasnat Toha</h1>
        <p className="mt-3 text-gray-400">Software Engineer - Bangkok, Thailand</p>
      </div>

      <div className="glass overflow-hidden rounded-2xl p-2 shadow-2xl shadow-black/30 sm:p-4">
        <object data={resumeUrl} type="application/pdf" className="h-[75vh] min-h-[620px] w-full rounded-xl bg-white" aria-label="Shabab Hasnat Toha resume">
          <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 p-8 text-center">
            <p className="text-gray-300">Your browser cannot display this PDF inline.</p>
            <a href={resumeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline">
              Open the resume <ExternalLink size={16} />
            </a>
          </div>
        </object>
      </div>
    </main>
  </div>
);

export default Resume;
