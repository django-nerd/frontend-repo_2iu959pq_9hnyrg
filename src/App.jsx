import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  // Add a skip-to-content link target and focus management on route-less SPA
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView();
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-teal-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-md">Skip to content</a>
      <Navbar />
      <main id="main" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />

        {/* About Section */}
        <section id="about" className="py-16">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="lg:col-span-2">
              <h2 className="text-2xl font-bold">About</h2>
              <div className="mt-4 space-y-4 text-neutral-700 dark:text-neutral-300 max-w-prose">
                <p>
                  I am a cybersecurity engineer focused on building resilient, observable, and secure systems. My
                  work spans detection engineering, cloud security architecture, and offensive testing to validate
                  defenses. I favor automation, transparency, and clear risk communication.
                </p>
                <p>
                  I collaborate with product and platform teams to integrate security as a paved road: guardrails
                  over gates. From code to cloud, I help teams ship faster and safer with least privilege, strong
                  identity, and continuous validation.
                </p>
              </div>
            </motion.div>
            <motion.aside initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white/60 dark:bg-neutral-900/60">
              <h3 className="font-semibold mb-3">Quick Facts</h3>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between"><dt className="text-neutral-600 dark:text-neutral-400">Location</dt><dd>Remote / NYC</dd></div>
                <div className="flex justify-between"><dt className="text-neutral-600 dark:text-neutral-400">Availability</dt><dd>Open to opportunities</dd></div>
                <div className="flex justify-between"><dt className="text-neutral-600 dark:text-neutral-400">Philosophy</dt><dd>Defense-in-depth, paved roads</dd></div>
              </dl>
            </motion.aside>
          </div>
        </section>

        <Skills />
        <Projects />

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-neutral-700 dark:text-neutral-300 max-w-prose mb-6">
            Use the form below to get in touch. This demo uses a dummy endpoint — replace with your preferred
            service when deploying. Includes a honeypot field for basic spam protection.
          </p>
          <form
            className="grid gap-4 max-w-xl"
            action="#"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = Object.fromEntries(new FormData(form));
              if (data.website) {
                alert('Spam detected.');
                return;
              }
              fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: data.name, email: data.email, message: data.message }),
              })
                .then(async (res) => {
                  const payload = await res.json().catch(() => ({}));
                  if (!res.ok) throw new Error(payload?.error || 'Failed to send');
                  alert('Message sent (logged locally in this demo).');
                  form.reset();
                })
                .catch((err) => alert(err.message));
            }}
          >
            <label className="grid gap-1 text-sm">
              <span>Name</span>
              <input name="name" required className="rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2" />
            </label>
            <label className="grid gap-1 text-sm">
              <span>Email</span>
              <input type="email" name="email" required className="rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2" />
            </label>
            {/* Honeypot */}
            <label className="hidden">
              <span>Website</span>
              <input name="website" tabIndex={-1} autoComplete="off" />
            </label>
            <label className="grid gap-1 text-sm">
              <span>Message</span>
              <textarea name="message" rows={5} required className="rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2" />
            </label>
            <button type="submit" className="inline-flex justify-center items-center rounded-md bg-teal-600 px-4 py-2 text-white shadow hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500">
              Send
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
