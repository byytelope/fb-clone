import { motion } from "framer-motion";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "text";
  wide?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, wide, ...props }, ref) => {
    const primaryClass =
      "bg-bluePrimary hover:bg-blueSecondary focus:bg-blueTertiary text-white font-medium ";
    const secondaryClass =
      "bg-lightBg hover:bg-lightSecondary focus:bg-lightSecondary text-black font-medium ";
    const textClass =
      "bg-transparent hover:bg-lightBg focus:bg-lightBg text-bluePrimary";
    const disabledClass =
      "bg-lightBg text-textTertiary pointer-events-none font-medium ";

    return (
      <motion.div whileTap={props.disabled ? {} : { scale: 0.97 }}>
        <button
          {...props}
          ref={ref}
          className={`${
            props.disabled
              ? disabledClass
              : variant === "primary"
              ? primaryClass
              : variant === "secondary"
              ? secondaryClass
              : textClass
          } rounded-md h-9 px-3 transition-colors duration-300 flex items-center justify-center space-x-2 ${
            wide ? "w-full" : ""
          }`}
        />
      </motion.div>
    );
  }
);

Button.displayName = "Button";

export default Button;
