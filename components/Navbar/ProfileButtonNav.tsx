import { MouseEventHandler } from "react";
import Image from "next/image";
import noProfilePic from "../../public/noProfilePic.png";
import { motion } from "framer-motion";

export default function ProfileButtonNav({
  active,
  onClick,
  firstName,
  avatarUrl,
}: {
  active: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
  firstName: string | undefined;
  avatarUrl?: string | undefined;
}) {
  return (
    <motion.div
      className={`flex justify-center items-center ${
        active ? "bg-lightBlue text-bluePrimary" : "hover:bg-lightBg"
      } p-1 rounded-full transition-colors duration-300 cursor-pointer has-tooltip select-none overflow-hidden`}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      layout
    >
      <span className="tooltip">Profile</span>
      <motion.div className="flex pointer-events-none" layout>
        <Image
          src={noProfilePic}
          alt="Profile Pic"
          width={30}
          height={30}
          layout="fixed"
          className="rounded-full"
        />
      </motion.div>
      {firstName && (
        <motion.span
          className="hidden md:inline-block font-medium text-sm px-2"
          layout
        >
          {firstName}
        </motion.span>
      )}
    </motion.div>
  );
}
