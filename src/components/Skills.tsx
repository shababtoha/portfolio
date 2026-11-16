import { skillGroups } from '../content';
import SectionHeading from './SectionHeading';

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="border-b border-line">
      <div className="mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          id="skills-heading"
          eyebrow="Technical skills"
          title="Grouped for a quick scan"
          lede="Languages, the frameworks I ship with, the data systems underneath, and the architecture I work in."
        />

        <div className="mt-10 divide-y divide-line border-y border-line">
          {skillGroups.map((group) => (
            <div key={group.name} className="grid gap-3 py-5 sm:grid-cols-[14rem_minmax(0,1fr)] sm:items-baseline sm:gap-8">
              <h3 className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.16em] text-accent">
                {group.name}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line bg-surface px-3 py-1.5 text-sm font-medium text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
