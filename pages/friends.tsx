import { NextPage } from "next";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "../lib/session";
import CommonHead from "../components/CommonHead";

const Friends: NextPage = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-4xl w-full px-4">
        <CommonHead title="Friends | Facebook" />
        <span>Friends</span>
        <div className="h-screen" />
        <div className="h-screen" />
        <div className="h-screen" />
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

export default Friends;
export { getServerSideProps };
