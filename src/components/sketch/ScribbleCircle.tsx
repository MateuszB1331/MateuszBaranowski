import { motion } from "framer-motion";

interface Props {
  className?: string;
  delay?: number;
}

/** A slightly imperfect hand-drawn circle, like a red-pen annotation around a key result. */
export function ScribbleCircle({ className = "", delay = 0 }: Props) {
  return (
    <svg
      viewBox="0 0 220 60"
      className={className}
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M40 8 C 12 10, 4 28, 6 38 C 8 50, 30 55, 60 56 C 110 58, 170 56, 196 46 C 214 39, 212 20, 190 12 C 160 1, 90 3, 55 9"
        stroke="var(--color-marker)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.9, delay, ease: "easeInOut" }}
      />
    </svg>
  );
}
