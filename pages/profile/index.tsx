import { NextPage } from "next";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "../../lib/session";

const ProfileIndex: NextPage = () => {
  return <div></div>;
};

const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const userId = req.session.userId;
    const username = "mohamedshadhaan";

    if (userId == null) {
      return {
        redirect: {
          destination: "/login",
          permanent: true,
        },
      };
    } else {
      return {
        redirect: {
          destination: `/profile/${username}`,
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

export default ProfileIndex;
export { getServerSideProps };
