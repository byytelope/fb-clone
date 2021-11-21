import { motion } from "framer-motion";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
}

const primaryClass =
  "w-full bg-bluePrimary hover:bg-blueSecondary focus:bg-blueTertiary text-white font-semibold text-xl rounded-md h-12 px-8";

const secondaryClass =
  "w-full bg-greenPrimary hover:bg-greenSecondary focus:bg-greenSecondary text-white font-semibold text-lg rounded-md h-12 px-8";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...props }, ref) => (
    <motion.div className="w-full" whileTap={{ scale: 0.97 }}>
      <button
        {...props}
        ref={ref}
        onClick={(e) => e.preventDefault()}
        className={props.variant === "primary" ? primaryClass : secondaryClass}
      />
    </motion.div>
  )
);

Button.displayName = "Button";
