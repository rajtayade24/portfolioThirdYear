import { useState } from "react";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import useAuthStore from "@/store/useAuthStore";
import ThemeToggleButton from "@/components/ThemeToggleButton";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useAuthStore();
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="group text-xl font-bold tracking-tight"
        >
      <span className="gradient-text">Raj</span>
          <span className="text-[var(--fg)]">.dev</span>
        </motion.a>

        <div className="hidden items-center gap-8 rounded-full border border-[var(--border)] bg-[var(--card)] px-6 py-3 shadow-[var(--shadow)] backdrop-blur-xl md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[var(--muted)] transition duration-200 hover:-translate-y-0.5 hover:text-[var(--fg)]"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
             <ThemeToggleButton />

          <a
            href="#contact"
            className="btn-premium px-5 py-2.5 text-sm"
          >
            Hire Me
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggleButton />
          <button
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--fg)] shadow-[var(--shadow)] backdrop-blur-md"
            aria-label="Toggle menu"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-4 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-[var(--shadow)] backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleClick}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-[var(--muted)] transition duration-200 hover:bg-[var(--card-strong)] hover:text-[var(--fg)]"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={handleClick}
                className="btn-premium mt-2 w-full px-4 py-3 text-center text-sm"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;