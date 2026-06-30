import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import SectionTitle from "@/components/SectionTitle";
import profileImage from "@/assets/images/profile.png";
import useImageTilt from "@/hooks/useImageTilt";
import TechTag from "@/components/TechTag";

const highlights = [
  {
    title: "Problem Solver",
    desc: "I enjoy breaking down complex problems and turning them into clean, scalable solutions.",
  },
  {
    title: "Full-Stack Focus",
    desc: "I build seamless experiences across frontend, backend, APIs, and database layers.",
  },
  {
    title: "Modern UI",
    desc: "I care about polished interfaces, smooth interactions, and strong visual hierarchy.",
  },
];

const techStack = [
  "React",
  "Spring Boot",
  "Java",
  "PostgreSQL",
  "JWT",
  "Tailwind CSS",
  "REST APIs",
];

const About = () => {
  const { ref, rotateX, rotateY, handleMove, handleLeave } = useImageTilt();

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[var(--bg)] px-4 py-20 text-[var(--fg)] transition-colors duration-500 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/10" />
        <div className="absolute right-[-10%] bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-300/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.04),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.03),transparent_35%)] dark:bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.10),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.08),transparent_35%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="About Me"
          title="Building modern"
          highlight="full-stack experiences"
          description="I am a Java Full-Stack Developer focused on creating responsive, scalable, and premium web applications with React, Spring Boot, and modern UI practices."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="rounded-[2rem]" style={{ perspective: 1200 }}>
              <motion.div
                ref={ref}
                onPointerMove={handleMove}
                onPointerLeave={handleLeave}
                onPointerCancel={handleLeave}
                whileHover={{ scale: 1.015 }}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }}
                className="relative"
              >
                <GlassCard className="p-4 sm:p-5">
                  <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.12),transparent_35%)] dark:bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.22),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.16),transparent_35%)]" />
                    <img
                      src={profileImage}
                      alt="Raj Tayade"
                      className="relative z-10 h-[420px] w-full object-cover object-top sm:h-[520px]"
                      draggable="false"
                    />
                  </div>
                </GlassCard>
              </motion.div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { value: "9+", label: "Projects" },
                { value: "1+", label: "Years" },
                { value: "7+", label: "Tech" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 text-center shadow-[var(--shadow-soft)] backdrop-blur-xl"
                >
                  <div className="text-2xl font-semibold text-[var(--fg)] sm:text-3xl">
                    {item.value}
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            <GlassCard className="p-6 sm:p-8">
              <p className="text-base leading-8 text-[var(--muted)] sm:text-lg">
                Hello, I'm{" "}
                <span className="font-medium text-[var(--fg)]">
                  Raj Tayade
                </span>
                , a{" "}
                <span className="font-medium text-[var(--fg)]">
                  Java Full-Stack Developer
                </span>{" "}
                passionate about building modern, scalable, and user-centric web applications. I specialize in{" "}
                <span className="font-medium text-[var(--fg)]">
                  React, Spring Boot, REST APIs, PostgreSQL, and JWT-based authentication
                </span>
                , creating solutions that combine clean architecture with exceptional user experiences.
              </p>

              <p className="mt-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
                I enjoy solving complex problems by developing responsive frontends, robust backend systems, and scalable APIs. My focus is on writing clean, maintainable code while crafting intuitive interfaces that deliver both performance and a polished user experience.
              </p>
            </GlassCard>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                  whileHover={{ y: -6 }}
                >
                  <GlassCard className="h-full p-5">
                    <h3 className="text-lg font-semibold text-[var(--fg)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                      {item.desc}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <TechTag key={index} tag={tech} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;