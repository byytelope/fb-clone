import { withIronSessionSsr } from "iron-session/next";
import { NextPage } from "next";
import { sessionOptions } from "../../lib/session";

const ProfileVideos: NextPage = () => {
  return <div>Videos</div>;
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

ProfileVideos.displayName = "ProfileVideos";

export default ProfileVideos;
export { getServerSideProps };