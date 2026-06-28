import { useRef } from "react";
import {
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

export default function useCardTilt() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 320,
    damping: 20,
    mass: 0.5,
  });

  const springY = useSpring(mouseY, {
    stiffness: 320,
    damping: 20,
    mass: 0.5,
  });

  const rotateY = useTransform(springX, [-0.5, 0.5], [-14, 14]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [14, -14]);

  const handleMove = (e) => {
    if (!ref.current || reduceMotion) return;
    if (e.pointerType === "touch") return;

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