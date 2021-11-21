import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/Button";
import CommonHead from "../components/CommonHead";
import TextField from "../components/TextField";

export default function Login() {
  return (
    <main>
      <CommonHead title="Facebook - log in or sign up" />
      <div className="flex flex-col min-h-screen md:h-screen justify-between">
        <section className="flex flex-col md:flex-row justify-center items-center lg:justify-start h-full sm:h-3/4 w-full px-4 md:px-16 lg:px-24 xl:px-32 2xl:px-80 py-16 md:py-0 lg:space-x-16 space-y-8 lg:space-y-0">
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left w-full lg:w-3/5 space-y-6">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/2560px-Facebook_Logo_%282019%29.svg.png"
              alt="Facebook"
              layout="fixed"
              width={256}
              height={50}
            />
            <p className="text-xl md:text-2xl lg:text-3xl px-8 md:px-0">
              Facebook helps you connect and share with the people in your life.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-full lg:w-2/5 lg:px-0">
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
        <footer className="flex flex-col h-full sm:h-1/4 bg-white px-4 md:px-16 lg:px-24 xl:px-32 2xl:px-80 text-textSecondary text-xs space-y-4 py-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            voluptatem odit voluptas velit doloremque at culpa reiciendis
            tempore laudantium. Consequatur illo perspiciatis labore reiciendis
            dignissimos nihil fuga. Mollitia, praesentium aperiam.
          </p>
          <div className="h-px w-full bg-black bg-opacity-10" />
          <span>Meta © 2021</span>
        </footer>
      </div>
    </main>
  );
}
