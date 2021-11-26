import { motion } from "framer-motion";
import { MouseEventHandler, ReactNode } from "react";

export default function NavButton({
  children,
  active,
  onClick,
  tooltip,
}: {
  children: ReactNode;
  active: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
  tooltip: string;
}) {
  return (
    <div
      className="flex relative items-center h-14 w-full justify-center has-tooltip"
      onClick={onClick}
    >
      <span className="tooltip">{tooltip}</span>
      <div className="flex justify-center items-center h-12 w-full cursor-pointer rounded-lg hover:bg-lightBg transition-colors duration-300 my-4">
        {children}
      </div>
      <motion.div
        className="w-full h-[3px] bg-bluePrimary absolute bottom-0 rounded-t-sm origin-bottom"
        initial={{ scaleY: 0 }}
        animate={active ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ ease: "easeOut", duration: 0.2 }}
      />
    </div>
  );
}
