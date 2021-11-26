import { NextPage } from "next";
import Image from "next/image";
import { withIronSessionSsr } from "iron-session/next";
import { BsFillPlusCircleFill, BsPencilFill } from "react-icons/bs";
import { sessionOptions } from "../../lib/session";
import coverPhoto from "../../public/coverPhoto.jpeg";
import profilePhoto from "../../public/noProfilePic.png";
import Button from "../../components/Button";
import Divider from "../../components/Divider";

const Profile: NextPage = () => {
  return (
    <div className="flex flex-col h-screen w-full">
      <div className="flex flex-col justify-center items-center bg-white w-screen px-4 md:px-16 lg:px-24 xl:px-32 2xl:px-80">
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
            <div className="absolute bottom-0">
              <div className="bg-white relative h-44 w-44 rounded-full p-1">
                <Image
                  src={profilePhoto}
                  alt="Profile photo"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-44 mr-4" />
            <div className="flex flex-col pt-8 pb-4">
              <span className="font-bold text-3xl">Mohamed Shadhaan</span>
              <span className="font-medium text-textSecondary">
                127 Friends
              </span>
              <div className="h-11 pt-3">Bruh</div>
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
      <div className="bg-white h-14 shadow-sm" />
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

export default Profile;
export { getServerSideProps };
