import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import SectionTitle from "@/components/SectionTitle";
import { Sparkles } from "lucide-react";
import TechTag from "@/components/TechTag";

const skillGroups = [
  {
    title: "Frontend",
    subtitle: "UI, interactivity, and responsive design",
    items: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML5 / CSS3", level: 96 },
    ],
  },
  {
    title: "Backend",
    subtitle: "APIs, business logic, and authentication",
    items: [
      { name: "Java", level: 88 },
      { name: "Spring Boot", level: 85 },
      { name: "REST APIs", level: 87 },
      { name: "JWT / Security", level: 82 },
    ],
  },
  {
    title: "Database & Tools",
    subtitle: "Data, version control, and workflow",
    items: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 75 },
      { name: "Git / GitHub", level: 90 },
      { name: "Postman", level: 84 },
    ],
  },
];

const cardVariants = [
  {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  },
  {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  },
  {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  },
];

const techTags = [
  "React",
  "Vite",
  "Tailwind",
  "Framer Motion",
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "JWT",
  "REST APIs",
  "GitHub",
  "Postman",
  "Render",
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[var(--bg)] px-5 py-20 text-[var(--fg)] transition-colors duration-500 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="blur-blue left-[-12%] top-12" />
        <div className="blur-cyan right-[-12%] top-28" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.04),transparent_45%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_45%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Skills"
          title="Tools and technologies I"
          highlight="work with"
          description="A focused overview of the technologies I use to build clean, scalable, and modern full-stack applications."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-6 lg:grid-cols-3"
        >
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              variants={cardVariants[groupIndex]}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              whileHover={{ y: -4 }}
            >
              <GlassCard className="h-full p-6 sm:p-7">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[var(--fg)]">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    {group.subtitle}
                  </p>
                </div>

                <div className="space-y-5">
                  {group.items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.55,
                        delay: groupIndex * 0.12 + index * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >

                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm font-medium text-[var(--fg)]">
                          {skill.name}
                        </span>
                        <motion.span
                          initial={{ opacity: 0, x: 8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: groupIndex * 0.12 + index * 0.1 + 0.25,
                          }}
                          className="text-sm text-[var(--muted)]"
                        >
                          {skill.level}%
                        </motion.span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-[var(--border)]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{
                            duration: 1,
                            delay: groupIndex * 0.1 + index * 0.08,
                            ease: "easeOut",
                          }}
                          className="h-full rounded-full bg-gradient-theme shadow-[0_0_20px_rgba(37,99,235,0.25)]"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <GlassCard className="p-6 sm:p-8">
            <h3 className="text-xl font-bold text-[var(--fg)]">
              What I bring to projects
            </h3>

            <p className="mt-4 max-w-3xl leading-8 text-[var(--muted)]">
              I build responsive interfaces, structured backend systems, and polished user experiences.
              My workflow focuses on clean code, maintainability, performance, and smooth collaboration across the stack.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { value: "9+", label: "Projects" },
                { value: "1+", label: "Years" },
                { value: "7+", label: "Tech" },
                { value: "100%", label: "Focus" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 text-center shadow-[var(--shadow-soft)] backdrop-blur-md transition-all duration-300 hover:border-blue-500/40 hover:bg-[var(--card-strong)] hover:shadow-[var(--shadow-card-hover)]"
                >
                  <div className="text-3xl font-bold gradient-text">
                    {item.value}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-400/10 text-blue-500 shadow-[0_10px_30px_rgba(59,130,246,0.18)] ring-1 ring-blue-500/20">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-[var(--fg)]">Tech stack</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  A curated set of technologies I use regularly in full-stack development.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {techTags.map((tag, index) => (
                <TechTag key={tag} tag={tag} index={index} />
              ))}
            </div>
          </GlassCard>
        </div>
      </div >
    </section >
  );
};

export default Skills;