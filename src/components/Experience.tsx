import { experience } from '../content';
import RichText from './RichText';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="border-b border-line">
      <div className="mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          id="experience-heading"
          eyebrow="Experience"
          title="Where the work happened"
          lede="Six-plus years of backend work, from a high-scale analytics platform to enterprise systems."
        />

        <div className="mt-12 space-y-14">
          {experience.map((company) => (
            <article key={company.company} className="border-t border-line pt-8">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-serif text-3xl text-ink">{company.company}</h3>
                <p className="text-sm font-medium text-muted">{company.location}</p>
              </div>

              <div className="mt-8 space-y-10">
                {company.roles.map((role) => (
                  <div key={`${company.company}-${role.period}`} className="grid gap-4 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-8">
                    <div>
                      <p className="font-mono text-sm text-accent">{role.period}</p>
                      {role.current ? (
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted">Current</p>
                      ) : null}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-ink">{role.title}</h4>
                      <ul className="mt-4 space-y-3">
                        {role.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3 leading-relaxed text-muted">
                            <span className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                            <span>
                              <RichText text={bullet} />
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
