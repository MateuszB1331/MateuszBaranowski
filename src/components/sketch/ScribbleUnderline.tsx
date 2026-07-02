import { motion } from "framer-motion";

interface Props {
  className?: string;
  delay?: number;
}

/** A hand-drawn underline stroke, like pen underlining under a headline word. */
export function ScribbleUnderline({ className = "", delay = 0 }: Props) {
  return (
    <svg
      viewBox="0 0 200 14"
      className={className}
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M2 9 C 50 4, 100 12, 150 6 C 165 4, 180 8, 198 5"
        stroke="var(--color-marker)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay, ease: "easeInOut" }}
      />
    </svg>
  );
}
