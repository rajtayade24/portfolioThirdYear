import { motion } from "framer-motion";

const Button = ({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  target,
  rel,
  disabled = false,
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-transparent active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60";

  const variants = {
    primary: "btn-premium text-white",
    secondary: "btn-soft",
    ghost:
      "bg-transparent text-[var(--fg)] hover:bg-[var(--card)] hover:shadow-[var(--shadow-soft)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3 text-sm sm:text-base",
    lg: "px-6 py-3.5 text-base sm:text-lg",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center justify-center gap-2"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  );
};

export default Button;