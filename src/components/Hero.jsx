import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] grid lg:grid-cols-2 items-center gap-10 py-12">
      {/* Left: Text content */}
      <div className="flex flex-col gap-6">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="sr-only">Cybersecurity Engineer portfolio homepage</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100">
            Alex Carter
          </h1>
          <p className="mt-2 text-lg font-medium text-teal-700 dark:text-teal-300">Cybersecurity Engineer</p>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300 max-w-prose">
            Building secure systems, breaking unsafe assumptions. I design, test, and harden cloud and
            application workloads with a pragmatic, defense-in-depth approach.
          </p>
          <div className="mt-6 flex flex-wrap gap-3" role="group" aria-label="Primary actions">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-md bg-teal-600 px-4 py-2 text-white shadow hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right: Spline scene */}
      <div className="relative h-[360px] sm:h-[460px] lg:h-[540px] rounded-lg overflow-hidden">
        <Spline
          scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* gradient overlay to improve contrast; pointer events disabled per instructions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white dark:from-neutral-950/80 to-transparent" />
      </div>
    </section>
  );
}
