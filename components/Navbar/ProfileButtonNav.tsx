import { MouseEventHandler } from "react";
import Image from "next/image";
import noProfilePic from "../../public/noProfilePic.png";
import { motion } from "framer-motion";

export default function ProfileButtonNav({
  active,
  onClick,
}: {
  active: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <motion.div
      className={`flex justify-center items-center ${
        active ? "bg-lightBlue text-bluePrimary" : "hover:bg-lightBg"
      } p-1 rounded-full transition-colors duration-300 cursor-pointer has-tooltip`}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
    >
      <span className="tooltip">Profile</span>
      <div className="flex">
        <Image
          src={noProfilePic}
          alt="Profile Pic"
          width={30}
          height={30}
          layout="fixed"
          className="rounded-full"
        />
      </div>
      <span className="font-medium text-sm px-2">Mohamed</span>
    </motion.div>
  );
}
