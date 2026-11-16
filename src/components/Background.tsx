import { competitive, education } from '../content';
import SectionHeading from './SectionHeading';

export default function Background() {
  return (
    <section id="background" aria-labelledby="background-heading" className="border-b border-line">
      <div className="mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          id="background-heading"
          eyebrow="Background"
          title="Education and competitive programming"
        />

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          <article className="border-t border-line pt-6">
            <h3 className="text-xl font-semibold text-ink">{education.school}</h3>
            <p className="mt-2 text-muted">{education.degree}</p>
            <p className="mt-4 font-serif text-3xl text-ink">{education.result}</p>
            <p className="mt-2 font-mono text-sm text-accent">{education.period}</p>
          </article>

          {competitive.map((item) => {
              const body = (
                <>
                  <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.16em] text-accent">
                    {item.name}
                  </p>
                  <p className="mt-3 font-serif text-3xl text-ink">{item.stat}</p>
                  <p className="mt-1 text-sm text-muted">{item.detail}</p>
                </>
              );

              if (item.href) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border-t border-line pt-6 transition-colors hover:border-accent"
                  >
                    {body}
                    <p className="mt-3 text-sm font-semibold text-accent">View profile</p>
                  </a>
                );
              }

              return (
                <article key={item.name} className="border-t border-line pt-6">
                  {body}
                </article>
              );
            })}
        </div>
      </div>
    </section>
  );
}
