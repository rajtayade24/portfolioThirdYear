import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20 overflow-hidden border-t border-[var(--border)] bg-[var(--bg)] px-4 py-12 text-[var(--fg)] sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/10" />
        <div className="absolute right-[-10%] bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-300/10" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md">

          <motion.h3
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 18px rgba(59,130,246,.35)",
            }}
            transition={{ duration: 0.3 }}
            className="cursor-default text-2xl font-bold tracking-tight"
          >
            <span className="gradient-text">Raj</span>
            <span>.dev</span>
          </motion.h3>

          {/* divider */}
          <div className="mt-6 h-px w-20 bg-gradient-to-r from-[var(--primary)] to-transparent" />

          {/* description */}
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            Java Full-Stack Developer building modern, scalable, and beautiful web experiences with React,
            Spring Boot, and clean UI engineering.
          </p>

          {/* quote */}
          <p className="mt-6 border-l-2 border-[var(--primary)] pl-4 italic text-sm text-[var(--muted)]">
            "Great software isn't just functional—it feels effortless."
          </p>

          {/* availability badge */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-xs font-medium text-green-500">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Available for opportunities
          </div>

        </div>


        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
            Quick Links
          </h4>

          <div className="mt-4 flex flex-col gap-3 text-sm">
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Skills", href: "#skills" },
              { name: "Projects", href: "#projects" },
              { name: "Contact", href: "#contact" },
              { name: "Resume", href: "https://drive.google.com/file/d/1nT52CdGVJjO-rwn5uM0IVomnJefQHCNe/view?usp=sharing" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.name === "Resume" ? "_blank" : undefined}
                rel={item.name === "Resume" ? "noreferrer" : undefined}
                className="text-[var(--muted)] transition duration-200 hover:translate-x-1 hover:text-[var(--fg)]"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
            Social
          </h4>

          <div className="mt-4 flex gap-3">
            {[
              {
                href: "https://github.com/rajtayade24",
                label: "GitHub",
                icon: FaGithub,
              },
              {
                href: "https://www.linkedin.com/in/raj-tayade-68a800328/",
                label: "LinkedIn",
                icon: FaLinkedinIn,
              },
              {
                href: "https://www.instagram.com/raj_tayade18/",
                label: "Instagram",
                icon: FaInstagram,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  whileHover={{
                    y: -6,
                    scale: 1.08,
                    rotate: 6,
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--fg)] shadow-[var(--shadow)] backdrop-blur-md transition hover:bg-[var(--card-strong)]"
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-[var(--border)] pt-6 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="font-medium">
            © {year} Raj Tayade. All rights reserved.
          </p>

          <p className="text-xs text-[var(--muted)]">
            Designed & Developed with React, GSAP, Framer Motion and ❤️
          </p>
        </div>
        <a
          href="#home"
          className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--card-strong)]"
        >
          Back to top

          <FaArrowUp
            size={12}
            className="transition-transform duration-300 group-hover:-translate-y-1"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;