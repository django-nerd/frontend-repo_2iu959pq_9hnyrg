import { motion } from 'framer-motion';
import { Shield, Bug, Cloud, Code } from 'lucide-react';

const categories = [
  {
    icon: Shield,
    title: 'Defensive Security',
    items: [
      { name: 'SIEM (Splunk, ELK)', level: 'Advanced' },
      { name: 'Incident Response', level: 'Advanced' },
      { name: 'Threat Modeling', level: 'Advanced' },
      { name: 'Zero Trust', level: 'Intermediate' },
    ],
  },
  {
    icon: Bug,
    title: 'Offensive Security',
    items: [
      { name: 'Web App Testing', level: 'Advanced' },
      { name: 'Network Pentesting', level: 'Advanced' },
      { name: 'Exploit Dev (Basics)', level: 'Intermediate' },
      { name: 'Red Team TTPs', level: 'Intermediate' },
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud Security',
    items: [
      { name: 'AWS (IAM, KMS, EKS)', level: 'Advanced' },
      { name: 'Azure (Defender, Entra)', level: 'Intermediate' },
      { name: 'Kubernetes Hardening', level: 'Advanced' },
      { name: 'IaC (Terraform)', level: 'Advanced' },
    ],
  },
  {
    icon: Code,
    title: 'Programming',
    items: [
      { name: 'Python', level: 'Advanced' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'Go', level: 'Intermediate' },
      { name: 'Bash/PowerShell', level: 'Advanced' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="flex items-end justify-between gap-4 mb-8">
        <h2 className="text-2xl font-bold">Skills & Tools</h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">Expertise across offensive, defensive, and cloud domains.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map(({ icon: Icon, title, items }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white/60 dark:bg-neutral-900/60"
          >
            <div className="flex items-center gap-2 mb-3">
              <Icon className="h-5 w-5 text-teal-600" />
              <h3 className="font-semibold">{title}</h3>
            </div>
            <ul className="space-y-2 text-sm">
              {items.map((it) => (
                <li key={it.name} className="flex items-center justify-between">
                  <span>{it.name}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300 border border-teal-200/60 dark:border-teal-800/60">
                    {it.level}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
