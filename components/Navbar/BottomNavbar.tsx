import { useRouter } from "next/router";
import FriendsIconNav from "./FriendsIconNav";
import HomeIconNav from "./HomeIconNav";
import NavButton from "./NavButton";

export default function BottomNavbar() {
  const router = useRouter();

  return (
    <div className="fixed bottom-0 w-full flex md:hidden justify-center bg-white h-14 items-center px-4 border-t border-lightSecondary z-50">
      <div className="flex space-x-2 w-64 justify-center justify-self-center">
        <NavButton
          tooltip="Home"
          active={router.pathname === "/"}
          onClick={(e) => {
            e.preventDefault();
            router.push("/");
          }}
        >
          <HomeIconNav filled={router.pathname === "/"} />
        </NavButton>
        <NavButton
          tooltip="Friends"
          active={router.pathname === "/friends"}
          onClick={(e) => {
            e.preventDefault();
            router.push("/friends");
          }}
        >
          <FriendsIconNav filled={router.pathname === "/friends"} />
        </NavButton>
      </div>
    </div>
  );
}
