import { motion } from "framer-motion";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...props }, ref) => {
    const primaryClass =
      "bg-bluePrimary hover:bg-blueSecondary focus:bg-blueTertiary text-white";
    const secondaryClass =
      "bg-lightBg hover:bg-lightSecondary focus:bg-lightSecondary text-black";
    const disabledClass = "bg-lightBg text-textTertiary pointer-events-none";

    return (
      <motion.div whileTap={props.disabled ? {} : { scale: 0.97 }}>
        <button
          {...props}
          ref={ref}
          className={`${
            props.disabled
              ? disabledClass
              : props.variant === "primary"
              ? primaryClass
              : secondaryClass
          } font-medium rounded-md h-9 px-3 transition-colors duration-300 flex items-center`}
        />
      </motion.div>
    );
  }
);

Button.displayName = "Button";

export default Button;
