import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "../lib/session";

export default function Index() {
  return (
    <div className="flex justify-center items-center h-screen">Logged In</div>
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
