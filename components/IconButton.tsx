import { MouseEventHandler, ReactNode } from "react";
import { motion } from "framer-motion";

export default function IconButton({
  children,
  onClick,
  variant,
}: {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  variant: "primary" | "secondary";
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`p-2 rounded-full h-8 hover:bg-lightSecondary ${
        variant === "primary" ? "bg-lightBg" : "bg-transparent"
      }`}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
