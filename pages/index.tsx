import { NextPage } from "next";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "../lib/session";
import { paddingClass } from "../lib/constants";

const Index: NextPage = () => {
  return (
    <div className={paddingClass}>
      <span>Logged In</span>
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

export default Index;
export { getServerSideProps };
