import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import SectionTitle from "@/components/SectionTitle";
import TechTag from "@/components/TechTag";


const experiences = [
  {
    year: "2026 – Present",
    role: "Java Full-Stack Development & Advanced Problem Solving",
    company: "B.Tech Computer Science • Third Year",
    desc: "Building scalable full-stack applications using React, Spring Boot, PostgreSQL, and JWT Authentication. Strengthening Data Structures & Algorithms, system design fundamentals, deployment, performance optimization, and secure application development through real-world projects.",
  },
  {
    year: "2025 – 2026",
    role: "Frontend, Backend & Project Development",
    company: "B.Tech Computer Science • Second Year",
    desc: "Expanded into full-stack development with React and Spring Boot by building real-world applications. Strengthened knowledge of DBMS, Operating Systems, REST APIs, PostgreSQL  and implemented secure JWT authentication and role-based authorization using Spring Security.",
  },
  {
    year: "2024 – 2025",
    role: "Programming & Frontend Foundations",
    company: "B.Tech Computer Science • First Year",
    desc: "Built a strong foundation in Java, object-oriented programming, HTML, CSS, JavaScript, and React. Focused on responsive UI development, problem-solving, and understanding core software engineering principles.",
  },
];

const stats = [
  { value: "9+", label: "Projects Built" },
  { value: "1+", label: "Years Building Projects" },
  { value: "7+", label: "Technologies Used" },
  { value: "100%", label: "Passion for Growth" },
];

const focusItems = [
  "React",
  "Spring Boot",
  "Spring Security",
  "JWT Authentication",
  "PostgreSQL",
  "REST APIs",
  "DSA",
  "System Design",
  "Deployment",
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[var(--bg)] px-4 py-20 text-[var(--fg)] transition-colors duration-500 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/10" />
        <div className="absolute right-[-10%] bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-300/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.04),transparent_45%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_45%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Learning Journey"
          title="My academic and"
          highlight="technical growth"
          description="A timeline showing how I progressed from programming fundamentals to building scalable full-stack applications through continuous learning and real-world projects."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <GlassCard className="p-6 sm:p-8">
            <div className="relative">
              <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--primary)] via-[var(--primary-2)] to-transparent sm:left-5" />

              <div className="space-y-8">
                {experiences.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                    whileHover={{ y: -2 }}
                    className="relative pl-12 sm:pl-16"
                  >
                    <div className="absolute left-0 top-2 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)] shadow-[var(--shadow-soft)] sm:h-10 sm:w-10">
                      <div className="h-3 w-3 rounded-full bg-gradient-theme" />
                    </div>

                    <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-[var(--shadow-soft)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--primary)_25%,transparent)] hover:bg-[var(--card-strong)]">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-[var(--fg)] sm:text-xl">
                            {item.role}
                          </h3>
                          <p className="mt-1 text-sm text-[var(--muted)]">
                            {item.company}
                          </p>
                        </div>

                        <span className="inline-flex w-fit rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)] shadow-[var(--shadow-soft)] backdrop-blur-md">
                          {item.year}
                        </span>
                      </div>

                      <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassCard>

          <div className="space-y-6">
            <GlassCard className="p-6 sm:p-8">
              <h3 className="text-2xl font-semibold text-[var(--fg)]">
                What this journey shows
              </h3>
              <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                My journey reflects consistent growth from learning programming fundamentals
                to developing complete full-stack applications. Every academic year has been
                focused on mastering new technologies, strengthening computer science
                concepts, and applying them through practical projects.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.05,
                      ease: "easeOut",
                    }}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 text-center shadow-[var(--shadow-soft)] backdrop-blur-md transition-all duration-300 hover:bg-[var(--card-strong)] hover:shadow-[var(--shadow-card-hover)]"
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

            <GlassCard className="p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-[var(--fg)]">
                Current focus
              </h3>

              <div className="mt-4 flex flex-wrap gap-3">
                {focusItems.map((item, index) => (
                  <TechTag key={item} tag={item} index={index} />
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;