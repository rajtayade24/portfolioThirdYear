import { motion, AnimatePresence } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import useAuthStore from "@/store/useAuthStore";

export default function ThemeToggleButton() {
  const toggleDarkMode = useAuthStore((s) => s.toggleDarkMode);
  const darkMode = useAuthStore((s) => s.darkMode);

  return (
    <motion.button
      type="button"
      onClick={toggleDarkMode}
      aria-label="Toggle theme"
      whileHover={{ scale: 1.06, y: -1 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 420, damping: 22 }}
      className="
        group relative flex h-12 w-12 items-center justify-center overflow-hidden
        rounded-full border border-white/30
        bg-white/70 text-slate-900 shadow-lg shadow-slate-900/10
        backdrop-blur-xl
        transition-colors duration-300
        dark:border-white/10 dark:bg-slate-950/70 dark:text-white
      "
    >
      <span className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/20 to-transparent opacity-80 dark:from-cyan-400/20 dark:via-indigo-500/10 dark:to-transparent" />

      <motion.span
        aria-hidden="true"
        className="
          absolute inset-0 rounded-full
          bg-[conic-gradient(from_180deg_at_50%_50%,rgba(59,130,246,0.0),rgba(59,130,246,0.18),rgba(168,85,247,0.18),rgba(34,197,94,0.14),rgba(59,130,246,0.0))]
          opacity-0 blur-md transition-opacity duration-300
          group-hover:opacity-100
        "
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      <motion.span
        className="
          absolute inset-[2px] rounded-full border border-white/40
          dark:border-white/10
        "
        animate={{
          boxShadow: darkMode
            ? "0 0 0 0 rgba(34,211,238,0.0)"
            : "0 0 0 0 rgba(59,130,246,0.0)",
        }}
      />

      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={darkMode ? "dark" : "light"}
          initial={{ opacity: 0, rotate: -90, scale: 0.6, y: 6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1, y: 0 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6, y: -6 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="relative z-10 flex items-center justify-center"
        >
          {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
        </motion.span>
      </AnimatePresence>

      <motion.span
        aria-hidden="true"
        className="
          absolute -right-1 -top-1 h-3 w-3 rounded-full
          bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.7)]
          dark:bg-cyan-300 dark:shadow-[0_0_18px_rgba(103,232,249,0.7)]
        "
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.65, 1, 0.65],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.button>
  );
}