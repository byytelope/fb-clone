import { NextPage } from "next";
// import { withIronSessionSsr } from "iron-session/next";
// import { sessionOptions } from "../../lib/session";

const ProfileAbout: NextPage = () => {
  return <div>About</div>;
};

// export const getServerSideProps = withIronSessionSsr(
//   async function getServerSideProps({ req }) {
//     const userId = req.session.userId;

//     if (userId == null) {
//       return {
//         redirect: {
//           destination: "/login",
//           permanent: true,
//         },
//       };
//     }

//     return {
//       props: { userId },
//     };
//   },
//   sessionOptions
// );

ProfileAbout.displayName = "ProfileAbout";

export default ProfileAbout;
