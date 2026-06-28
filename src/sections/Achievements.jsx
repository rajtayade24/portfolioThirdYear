import { motion } from "framer-motion";
import { FiAward, FiCode, FiBookOpen, FiZap } from "react-icons/fi";
import GlassCard from "@/components/GlassCard";
import SectionTitle from "@/components/SectionTitle";

const achievements = [
  {
    icon: FiCode,
    title: "9+ Projects Built",
    desc: "Designed and developed multiple frontend and full-stack projects with responsive UI and clean architecture.",
  },
  {
    icon: FiAward,
    title: "Full-Stack Developer",
    desc: "Strong hands-on experience with React, Spring Boot, REST APIs, JWT, and PostgreSQL.",
  },
  {
    icon: FiBookOpen,
    title: "DSA & Problem Solving",
    desc: "Consistently practicing data structures, algorithms, and logical problem solving.",
  },
  {
    icon: FiZap,
    title: "Modern UI Focus",
    desc: "I care about polished design, smooth motion, and premium user experience.",
  },
];

const stats = [
  { value: "9+", label: "Projects Completed" },
  { value: "1+", label: "Years Experience" },
  { value: "7+", label: "Technologies" },
  { value: "100%", label: "Dedication" },
];

const focusPoints = [
  "Building responsive full-stack applications",
  "Writing clean, maintainable code",
  "Improving UI/UX with modern design systems",
  "Learning cloud, deployment, and scalability",
];

const Achievement = () => {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-[var(--bg)] px-4 py-20 text-[var(--fg)] transition-colors duration-500 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/10" />
        <div className="absolute right-[-10%] bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-300/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.04),transparent_45%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_45%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Achievements"
          title="Milestones that reflect"
          highlight="growth and impact"
          description="A snapshot of my progress, consistency, and the foundation I am building as a modern Java Full-Stack Developer."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                whileHover={{ y: -4 }}
              >
                <GlassCard className="h-full p-6">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-[var(--shadow-soft)] backdrop-blur-md">
                    <Icon className="text-2xl text-[var(--primary)]" />
                  </div>

                  <h3 className="text-xl font-semibold text-[var(--fg)]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {item.desc}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <GlassCard className="h-full p-6 sm:p-8">
              <h3 className="text-2xl font-semibold text-[var(--fg)]">
                What I have achieved so far
              </h3>

              <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
                I have built and shipped multiple projects while sharpening my skills in frontend design,
                backend development, database work, and deployment. My focus is on continuous improvement
                and creating polished, useful applications.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 text-center shadow-[var(--shadow-soft)] backdrop-blur-md"
                  >
                    <div className="text-2xl font-semibold text-[var(--fg)] sm:text-3xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <GlassCard className="h-full p-6 sm:p-8">
              <h3 className="text-2xl font-semibold text-[var(--fg)]">
                Recognition and focus
              </h3>

              <div className="mt-6 space-y-4">
                {focusPoints.map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                    className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-[var(--shadow-soft)] backdrop-blur-md"
                  >
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-2)]" />
                    <p className="text-sm leading-7 text-[var(--muted)]">{point}</p>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;