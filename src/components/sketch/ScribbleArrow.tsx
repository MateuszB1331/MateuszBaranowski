import { motion } from "framer-motion";

interface Props {
  className?: string;
  direction?: "right" | "down";
  delay?: number;
}

/** A hand-sketched connecting arrow, drawn on scroll/appear like ink on paper. */
export function ScribbleArrow({ className = "", direction = "right", delay = 0 }: Props) {
  const path =
    direction === "right"
      ? "M2 8 C 20 3, 40 13, 58 7 C 66 5, 70 8, 76 6"
      : "M8 2 C 3 20, 13 40, 7 58 C 5 66, 8 70, 6 76";
  const viewBox = direction === "right" ? "0 0 80 16" : "0 0 16 80";

  return (
    <svg
      viewBox={viewBox}
      className={className}
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <motion.path
        d={path}
        stroke="var(--color-ink)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, delay, ease: "easeInOut" }}
      />
      <motion.path
        d={
          direction === "right"
            ? "M68 1 C 71 3, 74 5, 76 6 C 73 7, 70 9, 68 12"
            : "M1 68 C 3 71, 5 74, 6 76 C 7 73, 9 70, 12 68"
        }
        stroke="var(--color-ink)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.25, delay: delay + 0.6, ease: "easeInOut" }}
      />
    </svg>
  );
}
