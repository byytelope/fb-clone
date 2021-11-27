import { NextPage } from "next";
import CommonHead from "../../components/CommonHead";

const LoginIdentify: NextPage = () => {
  return (
    <div>
      <CommonHead title="Forgotten Password | Can't Log In | Facebook" />
      <div>Identify</div>
    </div>
  );
};

LoginIdentify.displayName = "LoginIdentify";

export default LoginIdentify;
