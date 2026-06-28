import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggle = ({ darkMode, setDarkMode, className = "" }) => {
  return (
    <motion.button
      type="button"
      onClick={() => setDarkMode(!darkMode)}
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.04 }}
      aria-label="Toggle theme"
      className={`group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--fg)] shadow-[var(--shadow-soft)] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-[var(--card-strong)] ${className}`}
    >
      <span className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-400/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <motion.span
        key={darkMode ? "sun" : "moon"}
        initial={{ rotate: -30, opacity: 0, scale: 0.8 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 30, opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative z-10"
      >
        {darkMode ? (
          <FiSun className="text-lg" />
        ) : (
          <FiMoon className="text-lg" />
        )}
      </motion.span>
    </motion.button>
  );
};

export default ThemeToggle;