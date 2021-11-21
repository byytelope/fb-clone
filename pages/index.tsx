import Image from "next/image";
import { Button } from "../components/Button";
import CommonHead from "../components/CommonHead";
import TextField from "../components/TextField";

export default function Home() {
  return (
    <main>
      <CommonHead title="Facebook - log in or sign up" />
      <div className="flex h-screen w-full px-80">
        <div className="flex flex-col w-2/3 justify-center">
          <div className="-m-8">
            <Image
              src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
              alt="Facebook"
              width={300}
              height={150}
              layout="fixed"
            />
          </div>
          <p className="text-3xl">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-1/3">
          <div className="bg-white rounded-xl shadow-lg p-4">
            <form className="flex flex-col items-center space-y-4">
              <div className="space-y-2">
                <TextField placeholder="Email address or phone number" />
                <TextField placeholder="Password" />
              </div>
              <Button variant="primary">Log In</Button>
              <a>Forgotten password?</a>
              <div className="h-px w-full bg-black bg-opacity-10" />
              <Button variant="secondary">Create New Account</Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
