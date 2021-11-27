import { withIronSessionSsr } from "iron-session/next";
import { NextPage } from "next";
import { sessionOptions } from "../../lib/session";

const ProfilePosts: NextPage = () => {
  return <div>Posts</div>;
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

ProfilePosts.displayName = "ProfilePosts";

export default ProfilePosts;
export { getServerSideProps };
