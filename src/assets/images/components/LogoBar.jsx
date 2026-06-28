import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const roleMeta = {
  CITIZEN: {
    title: "Citizen Service Portal",
    subtitle: "File and track your complaints",
    badge: "Citizen",
  },
  OFFICER: {
    title: "Officer Operations Portal",
    subtitle: "Manage assigned complaints",
    badge: "Officer",
  },
  DEPARTMENT_ADMIN: {
    title: "Admin Control Center",
    subtitle: "Supervise departments and reports",
    badge: "Admin",
  },
  SUPER_ADMIN: {
    title: "Super Admin Console",
    subtitle: "System-wide governance",
    badge: "Super Admin",
  },
};

const LogoBar = ({ role }) => {
  const meta = roleMeta[role] || {
    title: "Public Service Portal",
    subtitle: "Transparent grievance management",
    badge: "Guest",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="flex items-center gap-3"
    >
      <div className="icon-glass h-11 w-11">
        <ShieldCheck className="h-5 w-5 text-[var(--primary)]" />
      </div>

      <div className="leading-tight">
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-semibold tracking-tight text-[var(--fg)] sm:text-xl">
            {meta.title}
          </h1>

          <span className="hidden rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--muted)] shadow-[var(--shadow-soft)] backdrop-blur-md sm:inline-flex">
            {meta.badge}
          </span>
        </div>

        <p className="text-xs text-[var(--muted)] sm:text-sm">{meta.subtitle}</p>
      </div>
    </motion.div>
  );
};

export default LogoBar;