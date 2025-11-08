export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-neutral-200 dark:border-neutral-800 py-8 text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-neutral-600 dark:text-neutral-400">© {year} Your Name. All rights reserved.</p>
        <nav aria-label="Footer" className="flex items-center gap-4">
          <a className="hover:underline" href="#home">Home</a>
          <a className="hover:underline" href="#projects">Projects</a>
          <a className="hover:underline" href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
