import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Kubernetes Guardrail Suite',
    description: 'Policy-as-code pack enforcing CIS benchmarks across clusters with automated remediation.',
    tech: ['OPA', 'Kyverno', 'ArgoCD', 'Terraform'],
    outcome: 'Reduced misconfigurations by 70% and enabled continuous compliance.',
    links: { demo: '#', code: '#' },
  },
  {
    title: 'Cloud Breach Simulator',
    description: 'Purple-team tool to emulate real cloud attack paths for detection engineering.',
    tech: ['AWS', 'Python', 'Terraform', 'Sigma'],
    outcome: 'Improved detection coverage with 30+ validated rules in SIEM.',
    links: { demo: '#', code: '#' },
  },
  {
    title: 'Web App Security Hardening',
    description: 'End-to-end security revamp: SAST/DAST, secrets scanning, SBOM, and runtime protection.',
    tech: ['TypeScript', 'GitHub Actions', 'Trivy', 'Zap'],
    outcome: 'Blocked critical class vulnerabilities and reduced MTTR by 60%.',
    links: { demo: '#', code: '#' },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="flex items-end justify-between gap-4 mb-8">
        <h2 className="text-2xl font-bold">Projects</h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">Selected work demonstrating measurable security outcomes.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white/60 dark:bg-neutral-900/60"
          >
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">{p.description}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li key={t} className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">{t}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm">Outcome: <span className="text-neutral-900 dark:text-neutral-100 font-medium">{p.outcome}</span></p>
            <div className="mt-4 flex gap-3">
              <a href={p.links.demo} className="inline-flex items-center gap-1 text-teal-700 dark:text-teal-300 hover:underline"><ExternalLink className="h-4 w-4" /> Demo</a>
              <a href={p.links.code} className="inline-flex items-center gap-1 text-neutral-700 dark:text-neutral-300 hover:underline"><Github className="h-4 w-4" /> Code</a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
