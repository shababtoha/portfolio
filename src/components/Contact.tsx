import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { profile } from '../content';
import SectionHeading from './SectionHeading';

const channels = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: 'Phone',
    value: profile.phoneDisplay,
    href: profile.phoneHref,
    icon: Phone,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/shababtoha',
    href: profile.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/shababtoha',
    href: profile.github,
    icon: Github,
    external: true,
  },
] as const;

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          id="contact-heading"
          eyebrow="Contact"
          title="Hiring for backend or distributed systems?"
          lede="Email is the fastest way to reach me. The resume is one click away, and LinkedIn and GitHub are public."
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.external ? '_blank' : undefined}
              rel={channel.external ? 'me noopener noreferrer' : undefined}
              className="flex items-center gap-4 rounded-md border border-line bg-surface px-4 py-4 transition-colors hover:border-accent"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-canvas text-accent">
                <channel.icon size={18} aria-hidden="true" />
              </span>
              <span>
                <span className="block font-mono text-[0.7rem] font-medium uppercase tracking-[0.14em] text-muted">
                  {channel.label}
                </span>
                <span className="mt-0.5 block font-semibold text-ink">{channel.value}</span>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-muted">
            <MapPin size={16} aria-hidden="true" />
            {profile.location}
          </p>
          <a href={profile.resumePath} download={profile.resumeFileName} className="btn btn-primary">
            Download resume
          </a>
        </div>
      </div>
    </section>
  );
}
