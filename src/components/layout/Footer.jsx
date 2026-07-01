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
          <h3 className="text-2xl font-bold tracking-tight">
            <span className="gradient-text">Raj</span>
            <span>.dev</span>
          </h3>

          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            Java Full-Stack Developer building modern, scalable, and beautiful web experiences with React,
            Spring Boot, and clean UI engineering.
          </p>
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
                className="text-[var(--muted)] transition duration-200 hover:-translate-x-0.5 hover:text-[var(--fg)]"
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
                  whileHover={{ y: -4, scale: 1.04 }}
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
        <p>© {year} Raj Tayade. All rights reserved.</p>

        <a
          href="#home"
          className="inline-flex items-center gap-2 transition hover:text-[var(--fg)]"
        >
          Back to top <FaArrowUp size={12} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;