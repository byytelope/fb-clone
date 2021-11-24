import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { withIronSessionSsr } from "iron-session/next";
import Button from "../components/Button";
import CommonHead from "../components/CommonHead";
import Divider from "../components/Divider";
import Modal from "../components/Modal";
import Select from "../components/Select";
import TextField from "../components/TextField";
import { sessionOptions } from "../lib/session";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("male");
  const initialFocusRef = useRef(null);
  const router = useRouter();

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
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => {
                      e.preventDefault();
                      setEmail(e.target.value);
                    }}
                  />
                  <TextField
                    type="password"
                    placeholder="Password"
                    togglepassword="true"
                    value={password}
                    onChange={(e) => {
                      e.preventDefault();
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={async (e) => {
                    e.preventDefault();

                    await fetch("/api/signin", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        email,
                        password,
                      }),
                    }).then((res) => console.log(JSON.stringify(res.body)));

                    router.replace("/");
                  }}
                >
                  Log In
                </Button>
                <span className="text-sm">
                  <Link href="/forgotten-password">Forgotten password?</Link>
                </span>
                <Divider />
                <Button
                  variant="secondary"
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsDialogOpen(true);
                  }}
                >
                  Create New Account
                </Button>
              </form>
            </div>
          </div>
          <Modal
            isOpen={isDialogOpen}
            setIsOpen={setIsDialogOpen}
            initialFocusRef={initialFocusRef}
            title="Sign Up"
            description="It's quick and easy."
          >
            <form className="space-y-2">
              <div className="flex space-x-2">
                <TextField
                  id="firstNameSignUp"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => {
                    e.preventDefault();
                    setFirstName(e.target.value);
                  }}
                  ref={initialFocusRef}
                />
                <TextField
                  id="surnameSignUp"
                  placeholder="Surname"
                  value={surname}
                  onChange={(e) => {
                    e.preventDefault();
                    setSurname(e.target.value);
                  }}
                />
              </div>
              <TextField
                id="emailSignUp"
                type="email"
                placeholder="Email address"
                value={signUpEmail}
                onChange={(e) => {
                  e.preventDefault();
                  setSignUpEmail(e.target.value);
                }}
              />
              <TextField
                id="passwordSignUp"
                type="password"
                autoComplete="new-password"
                togglepassword="true"
                placeholder="New password"
                value={newPassword}
                onChange={(e) => {
                  e.preventDefault();
                  setNewPassword(e.target.value);
                }}
              />
              <TextField
                id="dobSignUp"
                type="date"
                label="Date of birth"
                value={dob}
                onChange={(e) => {
                  e.preventDefault();
                  setDob(e.target.value);
                }}
              />
              <Select
                id="genderSignUp"
                label="Gender"
                options={[
                  { name: "Male", value: "male" },
                  { name: "Female", value: "female" },
                ]}
                value={gender}
                onChange={(e) => {
                  e.preventDefault();
                  setGender(e.target.value);
                }}
              />
              <p className="text-xs text-textSecondary py-4">
                By clicking Sign Up, you agree to our Terms, Data Policy and
                Cookie Policy. You may receive SMS notifications from us and can
                opt out at any time.
              </p>
              <Button
                variant="secondary"
                type="submit"
                onClick={async (e) => {
                  e.preventDefault();

                  await fetch("/api/signup", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      name: firstName + " " + surname,
                      email: signUpEmail,
                      password: newPassword,
                      dob: dob,
                      gender: gender,
                    }),
                  }).then((res) => {
                    console.log(JSON.stringify(res.body));

                    if (res.status === 201) {
                      setIsDialogOpen(false);
                      router.replace("/");
                    } else {
                    }
                  });
                }}
              >
                Sign Up
              </Button>
            </form>
          </Modal>
        </section>
        <footer className="flex flex-col h-full sm:h-1/4 bg-white px-4 md:px-16 lg:px-24 xl:px-32 2xl:px-80 text-textSecondary text-xs space-y-4 py-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            voluptatem odit voluptas velit doloremque at culpa reiciendis
            tempore laudantium. Consequatur illo perspiciatis labore reiciendis
            dignissimos nihil fuga. Mollitia, praesentium aperiam.
          </p>
          <Divider />
          <span>Meta © 2021</span>
        </footer>
      </div>
    </main>
  );
}

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const userId = req.session.userId;

    if (userId != null) {
      return {
        redirect: {
          destination: "/",
          permanent: true,
        },
      };
    }

    return {
      props: {},
    };
  },
  sessionOptions
);
