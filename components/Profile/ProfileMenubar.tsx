import { useRouter } from "next/router";
import { paddingClass } from "../../lib/constants";
import NavButton from "../Navbar/NavButton";

export default function ProfileMenubar() {
  const router = useRouter();
  const profileMenuItems = [
    { name: "Posts", link: "/profile/[username]" },
    { name: "About", link: "/profile/[username]/about" },
    { name: "Friends", link: "/profile/[username]/friends" },
    { name: "Photos", link: "/profile/[username]/photos" },
    { name: "Story Archive", link: "/profile/[username]/archive" },
    { name: "Videos", link: "/profile/[username]/videos" },
  ];

  return (
    <div
      className={`sticky h-14 bg-white shadow-sm flex space-x-2 justify-center justify-self-center ${paddingClass}`}
    >
      {profileMenuItems.map((item, i) => {
        return (
          <NavButton
            key={item.name + i.toString()}
            onClick={(e) => {
              e.preventDefault();
              router.push({
                pathname: item.link,
                query: { username: "mohamedshadhaan" },
              });
            }}
            active={router.pathname === item.link}
          >
            {item.name}
          </NavButton>
        );
      })}
    </div>
  );
}
