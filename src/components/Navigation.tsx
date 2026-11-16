import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navItems, profile } from '../content';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas">
      <div className="h-1 bg-accent" aria-hidden="true" />
      <div className="mx-auto flex h-16 max-w-page items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="font-serif text-2xl leading-none text-ink" onClick={close}>
          {profile.shortName}
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navItems.filter((item) => item.href !== '#contact').map((item) => {
            const id = item.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'true' : undefined}
                className={`border-b-2 pb-0.5 text-sm font-semibold ${
                  isActive
                    ? 'border-accent text-ink'
                    : 'border-transparent text-muted hover:text-ink'
                }`}
              >
                {item.name}
              </a>
            );
          })}
          <a href="/resume" className="text-sm font-semibold text-muted hover:text-ink">
            Resume
          </a>
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <a href="#contact" className="btn btn-primary hidden sm:inline-flex">
            Contact
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 top-[4.25rem] z-30 overflow-y-auto bg-canvas px-5 py-4 lg:hidden"
          aria-label="Mobile"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              className="block border-b border-line py-4 text-lg font-semibold text-ink"
            >
              {item.name}
            </a>
          ))}
          <a href="/resume" onClick={close} className="block border-b border-line py-4 text-lg font-semibold text-ink">
            Resume
          </a>
        </nav>
      ) : null}
    </header>
  );
}
