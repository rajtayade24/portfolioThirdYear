// hooks/useImageTilt.js
import { useRef } from "react";
import {
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

export default function useImageTilt() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 220,
    damping: 24,
    mass: 0.6,
  });

  const springY = useSpring(mouseY, {
    stiffness: 220,
    damping: 24,
    mass: 0.6,
  });

  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);

  const handleMove = (e) => {
    if (!ref.current || reduceMotion) return;

    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    mouseX.set(x - 0.5);
    mouseY.set(y - 0.5);
  };

  const handleLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return {
    ref,
    rotateX: reduceMotion ? 0 : rotateX,
    rotateY: reduceMotion ? 0 : rotateY,
    handleMove,
    handleLeave,
  };
}