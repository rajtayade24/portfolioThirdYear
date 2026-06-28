import { motion } from "framer-motion";

const Loader = ({ fullScreen = true }) => {
  return (
    <div
      className={`${
        fullScreen ? "fixed inset-0 z-[9999]" : "relative"
      } flex items-center justify-center bg-[var(--bg)]`}
    >
      <div className="relative flex items-center justify-center">
        <motion.div
          className="absolute h-24 w-24 rounded-full border border-[color-mix(in_srgb,var(--primary)_25%,transparent)]"
          animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute h-16 w-16 rounded-full border border-[color-mix(in_srgb,var(--primary-2)_35%,transparent)]"
          animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="h-5 w-5 rounded-full bg-gradient-theme shadow-[0_0_30px_rgba(56,189,248,0.55)]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default Loader;