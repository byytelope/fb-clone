import { withIronSessionSsr } from "iron-session/next";
import { NextPage } from "next";
import { sessionOptions } from "../../lib/session";

const ProfileFriends: NextPage = () => {
  return <div>Friends</div>;
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

ProfileFriends.displayName = "ProfileFriends";

export default ProfileFriends;
export { getServerSideProps };
