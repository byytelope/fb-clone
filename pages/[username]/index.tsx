import { NextPage } from "next";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "../../lib/session";
import CommonHead from "../../components/CommonHead";

const Profile: NextPage = () => {
  return (
    <div>
      <CommonHead title="Mohamed Shadhaan | Facebook" />
      <div>Profile</div>
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

Profile.displayName = "Profile";

export default Profile;
export { getServerSideProps };
