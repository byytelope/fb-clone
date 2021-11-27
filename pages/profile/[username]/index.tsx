import { NextPage } from "next";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "../../../lib/session";

const Profile: NextPage = () => {
  return <div>Profile</div>;
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
