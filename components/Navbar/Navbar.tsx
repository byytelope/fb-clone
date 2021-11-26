import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BsBoxArrowLeft } from "react-icons/bs";
import FbLogo from "./FbLogo";
import FriendsIconNav from "./FriendsIconNav";
import HomeIconNav from "./HomeIconNav";
import IconButton from "../IconButton";
import NavButton from "./NavButton";
import ProfileButtonNav from "./ProfileButtonNav";

export default function Navbar() {
  const [homeActive, setHomeActive] = useState(false);
  const [friendsActive, setFriendsActive] = useState(false);
  const [profileActive, setProfileActive] = useState(false);
  const router = useRouter();

  useEffect(() => {
    switch (router.pathname) {
      case "/":
        setHomeActive(true);
        setFriendsActive(false);
        setProfileActive(false);
        break;
      case "/friends":
        setHomeActive(false);
        setFriendsActive(true);
        setProfileActive(false);
        break;
      case "/profile/[username]":
        setHomeActive(false);
        setFriendsActive(false);
        setProfileActive(true);
        break;
      default:
        setHomeActive(false);
        setFriendsActive(false);
        setProfileActive(false);
        break;
    }
  }, [router]);

  return (
    <div className="fixed w-full grid grid-cols-3 grid-rows-1 bg-white h-14 items-center px-4 shadow z-50">
      <div className="justify-self-start">
        <FbLogo />
      </div>
      <div className="flex space-x-2 w-64 justify-center justify-self-center">
        <NavButton
          tooltip="Home"
          active={homeActive}
          onClick={(e) => {
            e.preventDefault();
            router.push("/");
          }}
        >
          <HomeIconNav filled={homeActive} />
        </NavButton>
        <NavButton
          tooltip="Friends"
          active={friendsActive}
          onClick={(e) => {
            e.preventDefault();
            router.push("/friends");
          }}
        >
          <FriendsIconNav filled={friendsActive} />
        </NavButton>
      </div>
      <div className="flex justify-self-end items-center space-x-4 text-xl">
        <ProfileButtonNav
          active={profileActive}
          onClick={(e) => {
            e.preventDefault();
            router.push("/profile/mohamedshadhaan");
          }}
        />
        <div className="has-tooltip">
          <span className="tooltip">Logout</span>
          <IconButton
            onClick={async (e) => {
              e.preventDefault();
              await fetch("/api/signout", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
              }).then(async (res) => {
                const json: { message: string } = await res.json();

                if (res.status === 200) {
                  console.log(json.message);
                  router.replace("/login");
                } else {
                  console.log("Error");
                }
              });
            }}
            variant="primary"
          >
            <BsBoxArrowLeft />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
