interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
  lede?: string;
}

export default function SectionHeading({ id, eyebrow, title, lede }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.18em] text-accent">
        {eyebrow}
      </p>
      <h2 id={id} className="mt-2 text-balance font-serif text-4xl leading-tight text-ink sm:text-[2.6rem]">
        {title}
      </h2>
      {lede ? <p className="mt-3 text-pretty text-lg leading-relaxed text-muted">{lede}</p> : null}
    </div>
  );
}
