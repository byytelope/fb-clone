import { useRouter } from "next/router";
import { BsBoxArrowLeft } from "react-icons/bs";
import FbLogo from "./FbLogo";
import FriendsIconNav from "./FriendsIconNav";
import HomeIconNav from "./HomeIconNav";
import IconButton from "../IconButton";
import TabButton from "../TabButton";
import ProfileButtonNav from "./ProfileButtonNav";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="fixed w-full grid grid-cols-2 md:grid-cols-3 grid-rows-1 bg-white h-14 items-center px-4 shadow z-50">
      <div className="justify-self-start">
        <FbLogo />
      </div>
      <div className="hidden md:flex space-x-2 w-64 justify-center justify-self-center">
        <TabButton
          tooltip="Home"
          active={router.pathname === "/"}
          onClick={(e) => {
            e.preventDefault();
            router.push("/");
          }}
        >
          <HomeIconNav filled={router.pathname === "/"} />
        </TabButton>
        <TabButton
          tooltip="Friends"
          active={router.pathname === "/friends"}
          onClick={(e) => {
            e.preventDefault();
            router.push("/friends");
          }}
        >
          <FriendsIconNav filled={router.pathname === "/friends"} />
        </TabButton>
      </div>
      <div className="flex justify-self-end items-center space-x-2 text-xl">
        <ProfileButtonNav
          active={router.pathname.startsWith("/[username]")}
          onClick={(e) => {
            e.preventDefault();
            router.push("/mohamedshadhaan");
          }}
        />
        <div className="has-tooltip">
          <span className="tooltip right-4">Logout</span>
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
