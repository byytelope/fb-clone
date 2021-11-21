import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/Button";
import CommonHead from "../components/CommonHead";
import TextField from "../components/TextField";

export default function Login() {
  return (
    <main>
      <CommonHead title="Facebook - log in or sign up" />
      <div className="flex flex-col h-screen">
        <section className="flex h-3/4 w-full px-80 space-x-16">
          <div className="flex flex-col justify-center w-3/5">
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
          <div className="flex flex-col justify-center items-center w-2/5">
            <div className="bg-white rounded-lg shadow-lg p-4 w-full">
              <form className="flex flex-col items-center space-y-4">
                <div className="space-y-2 w-full">
                  <TextField
                    type="email"
                    placeholder="Email address or phone number"
                  />
                  <TextField
                    type="password"
                    placeholder="Password"
                    showpassword="true"
                  />
                </div>
                <Button variant="primary">Log In</Button>
                <Link href="/">Forgotten password?</Link>
                <div className="h-px w-full bg-black bg-opacity-10" />
                <Button variant="secondary">Create New Account</Button>
              </form>
            </div>
          </div>
        </section>
        <footer className="h-1/4 bg-white px-80 flex flex-col text-textSecondary text-xs">
          <p className="py-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            voluptatem odit voluptas velit doloremque at culpa reiciendis
            tempore laudantium. Consequatur illo perspiciatis labore reiciendis
            dignissimos nihil fuga. Mollitia, praesentium aperiam.
          </p>
          <span>Meta © 2021</span>
        </footer>
      </div>
    </main>
  );
}
