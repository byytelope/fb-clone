import { useRef, useState } from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { withIronSessionSsr } from "iron-session/next";
import isEmail from "validator/lib/isEmail";
import FormButton from "../../components/FormButton";
import CommonHead from "../../components/CommonHead";
import Divider from "../../components/Divider";
import Modal from "../../components/Modal";
import Select from "../../components/Select";
import TextField from "../../components/TextField";
import { sessionOptions } from "../../lib/session";
import fbLogo from "../../public/fbLogo.png";

const Login: NextPage = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("male");
  const [firstNameError, setFirstNameError] = useState("");
  const [surnameError, setSurnameError] = useState("");
  const [signUpEmailError, setSignUpEmailError] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [dobError, setDobError] = useState("");
  const [genderError, setGenderError] = useState("");
  const initialFocusRef = useRef(null);
  const router = useRouter();

  const dialogCallback = () => {
    setIsDialogOpen(false);
    setFirstNameError("");
    setSurnameError("");
    setSignUpEmailError("");
    setNewPasswordError("");
    setDobError("");
    setGenderError("");
  };

  const onSignInSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (email === "" || !isEmail(email)) {
      setEmailError("Please provide a valid email");
    } else {
      setEmailError("");
    }

    if (password === "") {
      setPasswordError("Please provide a password");
      return;
    } else {
      setPasswordError("");
    }

    if (!isEmail(email)) {
      setEmailError("Please provide a valid email");
    } else {
      setEmailError("");

      await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }).then(async (res) => {
        const { message }: { message: string } = await res.json();
        console.log(message);

        if (res.status === 404) {
          setEmailError(message);
        } else if (res.status === 401) {
          setPasswordError(message);
        } else if (res.status === 200) {
          await router.replace("/");
        }
      });
    }
  };

  const onSignUpSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        surname,
        email: signUpEmail,
        password: newPassword,
        dob,
        gender,
      }),
    }).then(async (res) => {
      const json: {
        message: string;
        firstName?: string;
        surname?: string;
        email?: string;
        password?: string;
        dob?: string;
        gender?: string;
      } = await res.json();
      console.log(json);

      if (res.status === 201) {
        setIsDialogOpen(false);
        await router.replace("/");
      } else if (res.status === 422) {
        if (json.firstName != null) {
          setFirstNameError(json.firstName);
        } else {
          setFirstNameError("");
        }

        if (json.surname != null) {
          setSurnameError(json.surname);
        } else {
          setSurnameError("");
        }

        if (json.email != null) {
          setSignUpEmailError(json.email);
        } else {
          setSignUpEmailError("");
        }

        if (json.password != null) {
          setNewPasswordError(json.password);
        } else {
          setNewPasswordError("");
        }

        if (json.dob != null) {
          setDobError(json.dob);
        } else {
          setDobError("");
        }

        if (json.gender != null) {
          setGenderError(json.gender);
        } else {
          setGenderError("");
        }
      }
    });
  };

  return (
    <main>
      <CommonHead title="Facebook – log in or sign up" themeColor="#F0F2F5" />
      <div className="flex flex-col min-h-screen md:h-screen justify-between items-center">
        <section className="flex flex-col md:flex-row justify-center items-center lg:justify-start h-full sm:h-3/4 w-full max-w-5xl px-4 py-16 md:py-0 lg:space-x-16 space-y-8 lg:space-y-0">
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left w-full lg:w-3/5 space-y-6">
            <Image
              src={fbLogo}
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
                    errorText={emailError}
                    onChange={(e) => {
                      e.preventDefault();
                      setEmail(e.target.value.trim());
                    }}
                  />
                  <TextField
                    type="password"
                    placeholder="Password"
                    togglePassword="true"
                    value={password}
                    errorText={passwordError}
                    onChange={(e) => {
                      e.preventDefault();
                      setPassword(e.target.value.trim());
                    }}
                  />
                </div>
                <FormButton
                  variant="primary"
                  type="submit"
                  onClick={onSignInSubmit}
                >
                  Log In
                </FormButton>
                <span className="text-sm">
                  <Link href="/login/identify">Forgotten password?</Link>
                </span>
                <Divider />
                <FormButton
                  variant="secondary"
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsDialogOpen(true);
                  }}
                >
                  Create New Account
                </FormButton>
              </form>
            </div>
          </div>
          <Modal
            isOpen={isDialogOpen}
            onClose={dialogCallback}
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
                  ref={initialFocusRef}
                  errorText={firstNameError}
                  onChange={(e) => {
                    e.preventDefault();
                    setFirstName(e.target.value.trim());
                  }}
                />
                <TextField
                  id="surnameSignUp"
                  placeholder="Surname"
                  value={surname}
                  errorText={surnameError}
                  onChange={(e) => {
                    e.preventDefault();
                    setSurname(e.target.value.trim());
                  }}
                />
              </div>
              <TextField
                id="emailSignUp"
                type="email"
                placeholder="Email address"
                value={signUpEmail}
                errorText={signUpEmailError}
                onChange={(e) => {
                  e.preventDefault();
                  setSignUpEmail(e.target.value.trim());
                }}
              />
              <TextField
                id="passwordSignUp"
                type="password"
                autoComplete="new-password"
                togglePassword="true"
                placeholder="New password"
                value={newPassword}
                errorText={newPasswordError}
                onChange={(e) => {
                  e.preventDefault();
                  setNewPassword(e.target.value.trim());
                }}
              />
              <TextField
                id="dobSignUp"
                type="date"
                label="Date of birth"
                value={dob}
                errorText={dobError}
                onChange={(e) => {
                  e.preventDefault();
                  setDob(e.target.value.trim());
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
                errorText={genderError}
                onChange={(e) => {
                  e.preventDefault();
                  setGender(e.target.value.trim());
                }}
              />
              <p className="text-xs text-textSecondary py-4">
                By clicking Sign Up, you agree to our Terms, Data Policy and
                Cookie Policy. You may receive SMS notifications from us and can
                opt out at any time.
              </p>
              <FormButton
                variant="secondary"
                type="submit"
                onClick={onSignUpSubmit}
              >
                Sign Up
              </FormButton>
            </form>
          </Modal>
        </section>
        <footer className="flex h-full sm:h-1/4 w-full justify-center bg-white px-4 py-8">
          <div className="flex flex-col max-w-5xl w-full text-textSecondary text-xs space-y-4 ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              voluptatem odit voluptas velit doloremque at culpa reiciendis
              tempore laudantium. Consequatur illo perspiciatis labore
              reiciendis dignissimos nihil fuga. Mollitia, praesentium aperiam.
            </p>
            <Divider />
            <span>Meta © 2021</span>
          </div>
        </footer>
      </div>
    </main>
  );
};

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

Login.displayName = "Login";

export default Login;
