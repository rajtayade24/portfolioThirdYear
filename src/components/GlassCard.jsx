import { motion } from "framer-motion";

const GlassCard = ({
  children,
  className = "",
  hover = true,
  glow = true,
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -6, scale: 1.01 } : undefined}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`card-glass ${className}`}
    >
      {glow && (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.08),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.12),transparent_30%)]" />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlassCard;