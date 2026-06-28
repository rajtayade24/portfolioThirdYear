import { useEffect } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export default function useMagnetic(ref, strength = 18) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 180, damping: 18, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 180, damping: 18, mass: 0.6 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);

      x.set((dx / rect.width) * strength);
      y.set((dy / rect.height) * strength);
    };

    const reset = () => {
      x.set(0);
      y.set(0);
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", reset);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, [ref, strength, x, y]);

  return { x: springX, y: springY };
}

