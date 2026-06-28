import { motion, } from "framer-motion";
import useMagnetic from "@/hooks/useMagnetic";
import { useRef } from "react";

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
  strength = 18,
}) => {
  const ref = useRef(null);
  const { x, y } = useMagnetic(ref, strength);

  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-transparent disabled:pointer-events-none disabled:opacity-60 overflow-hidden will-change-transform";

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
    <>
      <span className="absolute inset-0 -translate-x-[120%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
      <span className="relative z-10 inline-flex items-center justify-center gap-2">
        {children}
      </span>
    </>
  );

  const sharedProps = {
    ref,
    style: { x, y },
    className: classes,
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 180, damping: 18, mass: 0.6 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        onMouseMove={() => { }}
        {...sharedProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...sharedProps}
    >
      {content}
    </motion.button>
  );
};

export default Button;