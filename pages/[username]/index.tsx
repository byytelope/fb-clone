import { NextPage } from "next";
import Image from "next/image";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "../../lib/session";
import CommonHead from "../../components/CommonHead";
import Button from "../../components/Button";
import Divider from "../../components/Divider";
import avatar from "../../public/noProfilePic.png";
import { motion } from "framer-motion";
import {
  BsFileEarmarkImageFill,
  BsFlagFill,
  BsGridFill,
  BsList,
  BsSliders,
} from "react-icons/bs";
import TabButton from "../../components/TabButton";
import { useState } from "react";

const Profile: NextPage = () => {
  const [activeTab, setActiveTab] = useState<"listView" | "gridView">(
    "listView"
  );

  return (
    <div className="flex flex-col md:flex-row md:space-x-4 space-y-4  md:space-y-0 py-4">
      <CommonHead title="Mohamed Shadhaan | Facebook" />
      <div className="max-w-lg w-full md:w-2/5 space-y-4">
        <div className="bg-white rounded-lg shadow p-4 space-y-4 flex flex-col">
          <span className="font-bold text-xl">Intro</span>
          <Button variant="secondary" wide>
            Add Bio
          </Button>
          <Button variant="secondary" wide>
            Edit Details
          </Button>
          <Button variant="secondary" wide>
            Add Hobbies
          </Button>
          <Button variant="secondary" wide>
            Add Featured
          </Button>
        </div>
        <div className="bg-white rounded-lg shadow p-4 space-y-4 flex flex-col">
          <div className="flex items-center justify-between w-full">
            <span className="font-bold text-xl">Photos</span>
            <Button variant="text">See All Photos</Button>
          </div>
          <div className="h-96" />
        </div>
        <div className="bg-white rounded-lg shadow p-4 space-y-4 flex flex-col">
          <div className="flex items-center justify-between w-full">
            <span className="font-bold text-xl">Friends</span>
            <Button variant="text">See All Friends</Button>
          </div>
          <div className="h-96" />
        </div>
      </div>
      <div className="max-w-lg w-full md:w-3/5 space-y-4">
        <div className="bg-white rounded-lg shadow flex flex-col">
          <div className="flex space-x-4 p-4">
            <div className="h-10 relative">
              <Image
                src={avatar}
                alt="Profile Picture"
                layout="fixed"
                width="40"
                height="40"
                className="rounded-full"
              />
            </div>
            <motion.div
              className="bg-lightBg flex items-center w-full px-4 rounded-full text-textSecondary font-light cursor-pointer hover:bg-lightSecondary select-none"
              onClick={(e) => {
                e.preventDefault();
              }}
              whileTap={{ scale: 0.98 }}
            >
              What&apos;s on your mind?
            </motion.div>
          </div>
          <Divider />
          <div className="p-4 flex w-full space-x-4">
            <div className="w-full">
              <Button variant="secondary" wide>
                <BsFileEarmarkImageFill className="text-greenPrimary" />
                <span>Photo/Video</span>
              </Button>
            </div>
            <div className="w-full">
              <Button variant="secondary" wide>
                <BsFlagFill className="text-bluePrimary" />
                <span>Life Event</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow flex flex-col">
          <div className="p-4 flex justify-between items-center">
            <span className="font-bold text-xl">Posts</span>
            <Button variant="secondary">
              <BsSliders />
              <span>Filters</span>
            </Button>
          </div>
          <Divider />
          <div className="px-4 flex">
            <TabButton
              active={activeTab === "listView"}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("listView");
              }}
            >
              <BsList />
              <span>List View</span>
            </TabButton>
            <TabButton
              active={activeTab === "gridView"}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("gridView");
              }}
            >
              <BsGridFill />
              <span>Grid View</span>
            </TabButton>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="font-semibold text-textSecondary text-xl">
            No posts available
          </span>
          <div className="h-96" />
          <div className="h-96" />
          <div className="h-96" />
          <div className="h-96" />
          <div className="h-96" />
        </div>
      </div>
    </div>
  );
};

const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const userId = req.session.userId;

    if (userId == null) {
      return {
        redirect: {
          destination: "/login",
          permanent: true,
        },
      };
    }

    return {
      props: { userId },
    };
  },
  sessionOptions
);

Profile.displayName = "Profile";

export default Profile;
export { getServerSideProps };
