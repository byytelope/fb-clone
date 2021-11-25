import { withIronSessionSsr } from "iron-session/next";
import CommonHead from "../components/CommonHead";
import Navbar from "../components/Navbar";
import { sessionOptions } from "../lib/session";

export default function Index() {
  return (
    <main className="flex flex-col">
      <CommonHead themeColor="#FFFFFF" />
      <div className="mb-14">
        <Navbar />
      </div>
      <span>Logged In</span>
      <div className="h-screen" />
      <div className="h-screen" />
      <div className="h-screen" />
    </main>
  );
}

export const getServerSideProps = withIronSessionSsr(
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
