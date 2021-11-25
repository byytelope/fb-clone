import Image from "next/image";
import noProfilePic from "../../public/noProfilePic.png";

export default function ProfileButtonNav() {
  return (
    <div className="flex justify-center items-center hover:bg-lightBg p-1 rounded-full transition-colors duration-300 cursor-pointer has-tooltip">
      <span className="tooltip">Profile</span>
      <div className="flex pr-2">
        <Image
          src={noProfilePic}
          alt="Profile Pic"
          width={30}
          height={30}
          layout="fixed"
          className="rounded-full"
        />
      </div>
      <span className="font-medium text-sm pr-2">Mohamed</span>
    </div>
  );
}
