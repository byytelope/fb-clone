import { NextPage } from "next";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "../lib/session";

const Friends: NextPage = () => {
  return (
    <div>
      <span>Friends</span>
      <div className="h-screen" />
      <div className="h-screen" />
      <div className="h-screen" />
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

export default Friends;
export { getServerSideProps };
