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
import { useUser } from "../../lib/hooks";

const ProfileLayout = ({ children }: { children: ReactNode }) => {
  const { user, isLoading } = useUser();

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col justify-center items-center bg-white z-40">
        <div className="w-full flex flex-col items-center max-w-4xl">
          <div className="bg-gradient-to-t from-transparent to-[rgba(0,0,0,0.4)] w-full flex justify-center">
            <div className="flex justify-center relative w-full h-36 md:h-80">
              <Image
                src={coverPhoto}
                alt="Cover photo"
                layout="intrinsic"
                height={360}
                width={1500}
                className="md:rounded-b-lg"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between h-full w-full pb-4 px-4">
            <div className="relative flex flex-col lg:flex-row">
              <div className="block mx-auto -mt-20 lg:absolute lg:bottom-0 z-10">
                <div className="bg-white relative h-44 w-44 rounded-full p-1">
                  <Image
                    src={profilePhoto}
                    alt="Profile photo"
                    className="rounded-full"
                    quality="100"
                  />
                </div>
              </div>
              <div className="lg:w-44 mt-2 lg:mt-auto lg:mr-4 flex justify-center lg:justify-end z-20 text-2xl">
                <div className="-mt-16 lg:mt-auto mb-6 lg:mb-4 ml-36">
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
              <div className="flex flex-col lg:pt-8 pb-4 items-center lg:items-start">
                <span className="font-bold text-3xl">
                  {isLoading
                    ? "Your Name"
                    : user?.firstName + " " + user?.surname}
                </span>
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
            <div className="flex space-x-2 justify-center lg:justify-center items-end lg:pt-8 lg:pb-4">
              <Button variant="primary">
                <BsFillPlusCircleFill />
                <span>Add to Story</span>
              </Button>
              <Button variant="secondary">
                <BsPencilFill />
                <span>Edit Profile</span>
              </Button>
            </div>
          </div>
          <Divider />
        </div>
      </div>
      <ProfileMenubar username={user?.username!} />
      <div className="flex justify-center">
        <div className="max-w-4xl w-full px-4">{children}</div>
      </div>
    </div>
  );
};

export default ProfileLayout;
