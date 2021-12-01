import { motion } from "framer-motion";
import { MouseEventHandler, ReactNode } from "react";

export default function TabButton({
  children,
  active,
  onClick,
  tooltip,
  bottom,
}: {
  children: ReactNode;
  active: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
  tooltip?: string;
  bottom?: boolean;
}) {
  const bottomClass =
    "w-full h-[3px] bg-bluePrimary absolute top-0 rounded-b-sm origin-top";
  const topClass =
    "w-full h-[3px] bg-bluePrimary absolute bottom-0 top-auto rounded-t-sm origin-bottom";

  return (
    <div className="flex relative items-center h-14 min-w-max w-full justify-center has-tooltip">
      {tooltip === undefined ? (
        <></>
      ) : (
        <span className="tooltip">{tooltip}</span>
      )}
      <div
        className={`flex justify-center items-center space-x-2 h-12 px-4 w-full cursor-pointer rounded-lg hover:bg-lightBg transition-colors duration-300 my-4 font-medium ${
          active ? "text-bluePrimary" : "text-textSecondary"
        }`}
        onClick={onClick}
      >
        {children}
      </div>
      <motion.div
        className={bottom ? bottomClass : topClass}
        initial={{ scaleY: 0 }}
        animate={active ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ ease: "easeOut", duration: 0.2 }}
      />
    </div>
  );
}
