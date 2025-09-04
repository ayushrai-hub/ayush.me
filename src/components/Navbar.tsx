import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

type NavbarProps = {
  dark: boolean;
  toggleDark: () => void;
};

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

const Navbar: React.FC<NavbarProps> = ({ dark, toggleDark }) => {
  const [active, setActive] = useState<string>('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -70% 0px', threshold: 0.1 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60 border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="text-lg font-semibold">ayush.me</a>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue rounded hover:text-electric-blue ${
                  active === s.id ? 'text-electric-blue font-medium' : ''
                }`}
                aria-current={active === s.id ? 'page' : undefined}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          aria-label="Toggle dark mode"
          onClick={toggleDark}
          className="inline-flex items-center gap-2 rounded-md border border-gray-200 dark:border-gray-700 px-3 py-1.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue"
        >
          {dark ? <Sun size={16} /> : <Moon size={16} />}
          <span className="hidden sm:inline">{dark ? 'Light' : 'Dark'}</span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
