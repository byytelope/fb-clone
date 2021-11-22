import { Dispatch, SetStateAction, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Divider from "./Divider";
import { Button } from "./Button";
import { BsXLg } from "react-icons/bs";
import TextField from "./TextField";
import Select from "./Select";

export default function SignUpDialog({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-white bg-opacity-80" />
          </Transition.Child>
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-4 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-lg rounded-lg space-y-4">
              <div className="flex flex-row justify-between">
                <div className="space-y-2">
                  <Dialog.Title
                    as="span"
                    className="text-3xl font-bold tracking-wide text-gray-900"
                  >
                    Sign Up
                  </Dialog.Title>
                  <p className="text-sm text-textSecondary">
                    It&apos;s quick and easy.
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                  }}
                  className="p-2 mr-1 rounded-full h-8 hover:bg-lightSecondary"
                >
                  <BsXLg />
                </button>
              </div>
              <Divider />
              <div>
                <form className="space-y-2">
                  <div className="flex space-x-2">
                    <TextField
                      id="firstNameSignUp"
                      placeholder="First name"
                      autoComplete=""
                      value={firstName}
                      onChange={(e) => {
                        e.preventDefault();
                        setFirstName(e.target.value);
                      }}
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
                    value={email}
                    onChange={(e) => {
                      e.preventDefault();
                      setEmail(e.target.value);
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
                </form>
              </div>
              <p className="text-xs text-textSecondary">
                By clicking Sign Up, you agree to our Terms, Data Policy and
                Cookie Policy. You may receive SMS notifications from us and can
                opt out at any time.
              </p>
              <Button
                variant="secondary"
                type="submit"
                onClick={async (e) => {
                  e.preventDefault();
                  await fetch("/api/auth/signup", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      name: firstName + " " + surname,
                      email: email,
                      newPassword: newPassword,
                      dob: dob,
                      gender: gender,
                    }),
                  }).then((res) => console.log(JSON.stringify(res.body)));
                  setIsOpen(false);
                }}
              >
                Sign Up
              </Button>
              {/* <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                }}
              >
                Got it, thanks!
              </button> */}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
