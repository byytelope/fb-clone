import { motion } from "framer-motion";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...props }, ref) => {
    const primaryClass =
      "bg-bluePrimary hover:bg-blueSecondary focus:bg-blueTertiary text-white text-xl";
    const secondaryClass =
      "bg-greenPrimary hover:bg-greenSecondary focus:bg-greenSecondary text-white text-lg";
    const disabledClass = "bg-lightBg text-textTertiary pointer-events-none";

    return (
      <motion.div
        className="w-full"
        whileTap={props.disabled ? {} : { scale: 0.97 }}
      >
        <button
          {...props}
          ref={ref}
          className={`${
            props.disabled
              ? disabledClass
              : props.variant === "primary"
              ? primaryClass
              : secondaryClass
          } w-full font-semibold rounded-md h-12 px-8`}
        />
      </motion.div>
    );
  }
);

Button.displayName = "Button";

export default Button;
