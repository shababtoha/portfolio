import { heroStats, profile, summary } from '../content';

const portraitClass = 'rounded-md object-cover object-[center_18%]';

export default function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <div className="mx-auto max-w-page px-5 py-14 sm:px-8 sm:py-20">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_15rem] lg:items-start lg:gap-12">
          <div>
            <div className="flex items-start justify-between gap-5">
              <p className="pt-1 font-mono text-[0.7rem] font-medium uppercase tracking-[0.18em] text-accent">
                Agoda · Bangkok · 6+ years
              </p>
              <img
                src="/portrait.jpg"
                alt="Shabab Hasnat Toha"
                width={880}
                height={1160}
                className={`${portraitClass} h-28 w-[5.6rem] shrink-0 sm:h-36 sm:w-28 lg:hidden`}
              />
            </div>

            <h1 className="mt-6 text-balance font-serif text-5xl leading-[0.95] text-ink sm:text-7xl">
              {profile.name}
            </h1>
            <h2 className="mt-5 max-w-2xl text-pretty text-xl leading-snug text-ink sm:text-2xl">
              <span className="font-semibold">Senior Backend Engineer</span>
              <span className="text-muted"> | </span>
              Distributed Systems
              <span className="text-muted"> | </span>
              Event-Driven & Real-Time Data Pipelines
            </h2>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted">{summary}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a href={`mailto:${profile.email}`} className="btn btn-primary text-center">
                Email {profile.email}
              </a>
              <a href={profile.resumePath} download={profile.resumeFileName} className="btn btn-secondary">
                Download resume
              </a>
              <a
                href={profile.linkedin}
                className="text-link px-1 py-2 font-semibold"
                target="_blank"
                rel="me noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={profile.github}
                className="text-link px-1 py-2 font-semibold"
                target="_blank"
                rel="me noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <img
            src="/portrait.jpg"
            alt=""
            width={880}
            height={1160}
            className={`${portraitClass} mt-2 hidden aspect-[4/5] w-full lg:block`}
          />
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse gap-2">
              <dt className="max-w-[12rem] text-sm leading-snug text-muted">{stat.label}</dt>
              <dd className="font-serif text-4xl leading-none text-ink sm:text-5xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
