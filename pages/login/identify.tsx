import { NextPage } from "next";
import CommonHead from "../../components/CommonHead";

const LoginIdentify: NextPage = () => {
  return (
    <div>
      <CommonHead
        title="Forgotten Password | Can't Log In | Facebook"
        themeColor="#F0F2F5"
      />
      <div className="flex justify-center">
        <div className="max-w-5xl w-full px-4">Identify</div>
      </div>
    </div>
  );
};

LoginIdentify.displayName = "LoginIdentify";

export default LoginIdentify;
