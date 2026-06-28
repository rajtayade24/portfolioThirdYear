import { motion } from "framer-motion";

const SectionTitle = ({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className = "",
}) => {
  const alignClass =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mx-auto mb-10 flex max-w-3xl flex-col ${alignClass} ${className}`}
    >
      {eyebrow && (
        <span className="mb-3 inline-flex rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-1 text-xs font-medium uppercase tracking-[0.24em] text-[var(--muted)] shadow-[var(--shadow-soft)] backdrop-blur-md">
          {eyebrow}
        </span>
      )}

      <h2 className="text-3xl font-semibold tracking-tight text-[var(--fg)] sm:text-4xl lg:text-5xl">
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>

      {description && (
        <p className=" section-desc mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;