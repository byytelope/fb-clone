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
  const router = useRouter();

  useEffect(() => {
    switch (router.pathname) {
      case "/":
        setHomeActive(true);
        setFriendsActive(false);
        break;
      case "/friends":
        setHomeActive(false);
        setFriendsActive(true);
        break;
      default:
        break;
    }
  }, [router]);

  return (
    <div className="fixed w-full grid grid-cols-3 grid-rows-1 bg-white h-14 items-center px-4 shadow">
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
        <ProfileButtonNav />
        <div className="has-tooltip">
          <span className="tooltip">Logout</span>
          <IconButton
            onClick={(e) => {
              e.preventDefault();
              router.push("/api/signout");
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
