import { useEffect, useState } from 'react';
import { Moon, Sun, Github, Linkedin, Mail } from 'lucide-react';

// Simple, accessible site header with dark-mode toggle and a skip link target
export default function Navbar() {
  const [theme, setTheme] = useState('system');
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage or system
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
    setMounted(true);
  }, []);

  // Apply theme to html root and persist to localStorage
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme, mounted]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 border-b border-neutral-200/60 dark:border-neutral-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            CyberSec Portfolio
          </a>

          <nav aria-label="Primary" className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-teal-600 dark:hover:text-teal-400">About</a>
            <a href="#skills" className="hover:text-teal-600 dark:hover:text-teal-400">Skills</a>
            <a href="#projects" className="hover:text-teal-600 dark:hover:text-teal-400">Projects</a>
            <a href="#contact" className="hover:text-teal-600 dark:hover:text-teal-400">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a href="mailto:you@example.com" aria-label="Email" className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800">
              <Mail className="h-5 w-5" />
            </a>
            <a href="https://github.com/your-handle" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/your-handle" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800">
              <Linkedin className="h-5 w-5" />
            </a>
            <button
              aria-label="Toggle dark mode"
              className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
