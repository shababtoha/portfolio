import { highlights } from '../content';
import RichText from './RichText';
import SectionHeading from './SectionHeading';

export default function Highlights() {
  return (
    <section id="work" aria-labelledby="work-heading" className="border-b border-line">
      <div className="mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          id="work-heading"
          eyebrow="What I build"
          title="The systems behind the platform"
          lede="Event pipelines, detection, alerting, and privacy controls on the analytics platform I own at Agoda."
        />

        <div className="mt-10 grid border-t border-line sm:grid-cols-2">
          {highlights.map((item, index) => (
            <article
              key={item.title}
              className={`border-line py-7 sm:px-6 sm:odd:border-r sm:odd:pl-0 sm:even:pr-0 ${
                index < highlights.length - 1 ? 'border-b' : ''
              } ${index < highlights.length - 2 ? 'sm:border-b' : 'sm:border-b-0'}`}
            >
              <p className="font-mono text-xs font-medium text-accent">{item.index}</p>
              <h3 className="mt-3 text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted">
                <RichText text={item.text} />
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
