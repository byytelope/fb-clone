import Image from "next/image";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  BsCameraFill,
  BsFillPlusCircleFill,
  BsPencilFill,
} from "react-icons/bs";
import coverPhoto from "../../public/coverPhoto.jpeg";
import profilePhoto from "../../public/noProfilePic.png";
import Button from "../../components/Button";
import Divider from "../../components/Divider";
import IconButton from "../../components/IconButton";
import ProfileMenubar from "../../components/Profile/ProfileMenubar";
import { paddingClass } from "../../lib/constants";

const ProfileLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col w-full">
      <div
        className={`flex flex-col justify-center items-center bg-white w-screen ${paddingClass}`}
      >
        <div className="flex justify-center relative w-full">
          <Image
            src={coverPhoto}
            alt="Cover photo"
            layout="fixed"
            height={360}
            width={1500}
            className="rounded-b-lg"
          />
        </div>
        <div className="flex justify-between h-full w-full pb-4">
          <div className="relative flex">
            <div className="absolute bottom-0 z-10">
              <div className="bg-white relative h-44 w-44 rounded-full p-1">
                <Image
                  src={profilePhoto}
                  alt="Profile photo"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-44 mr-4 flex justify-end z-20 text-2xl">
              <div className="mt-auto mb-4">
                <IconButton
                  variant="primary"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <BsCameraFill />
                </IconButton>
              </div>
            </div>
            <div className="flex flex-col pt-8 pb-4">
              <span className="font-bold text-3xl">Mohamed Shadhaan</span>
              <span className="font-medium text-textSecondary">
                127 Friends
              </span>
              <div className="h-11 pt-3 inline-flex flex-row-reverse justify-end">
                {[0, 1, 2, 3].map((num) => {
                  return (
                    <motion.div
                      key={num}
                      className="w-8 avatar-group border-white"
                      onClick={(e) => e.preventDefault()}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Image src={profilePhoto} alt="Lol" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex space-x-2 justify-end items-end pt-8 pb-4">
            <Button variant="primary">
              <BsFillPlusCircleFill />
              <span className="pl-2">Add to Story</span>
            </Button>
            <Button variant="secondary">
              <BsPencilFill />
              <span className="pl-2">Edit Profile</span>
            </Button>
          </div>
        </div>
        <Divider />
      </div>
      <ProfileMenubar />
      <div className={paddingClass}>{children}</div>
    </div>
  );
};

export default ProfileLayout;