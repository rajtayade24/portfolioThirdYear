import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";

const socialItems = [
  {
    name: "GitHub",
    href: "https://github.com/",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: FaLinkedinIn,
  },
  {
    name: "Twitter",
    href: "https://x.com/",
    icon: FaTwitter,
  },
  {
    name: "Email",
    href: "mailto:yourmail@example.com",
    icon: FaEnvelope,
  },
];

const SocialLinks = ({ items = socialItems, className = "" }) => {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {items.map((item, index) => {
        const Icon = item.icon;
        const external = item.href.startsWith("http");

        return (
          <motion.a
            key={item.name}
            href={item.href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.35, ease: "easeOut" }}
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            aria-label={item.name}
            className="icon-glass h-12 w-12 text-[var(--fg)] transition hover:-translate-y-1 hover:bg-[var(--card-strong)] hover:text-[var(--primary)]"
          >
            <Icon className="text-lg transition duration-300 group-hover:scale-110" />
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialLinks;