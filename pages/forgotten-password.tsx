import { NextPage } from "next";
import { paddingClass } from "../lib/constants";

const ForgottenPassword: NextPage = () => {
  return (
    <div
      className={`flex justify-center items-center h-screen ${paddingClass}`}
    >
      Oops
    </div>
  );
};

export default ForgottenPassword;
