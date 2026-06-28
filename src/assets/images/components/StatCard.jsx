import { motion } from "framer-motion";

export default function StatCard({ icon: Icon, title, value, description }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="card-glass"
    >
      <div className="flex items-start gap-4 p-5 sm:p-6">
        <div className="icon-glass h-12 w-12 text-[var(--primary)]">
          <Icon className="h-5 w-5" />
        </div>

        <div className="min-w-0">
          <p className="text-sm font-medium text-[var(--muted)]">{title}</p>
          <p className="mt-1 text-2xl font-bold tracking-tight text-[var(--fg)]">
            {value}
          </p>
          <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}