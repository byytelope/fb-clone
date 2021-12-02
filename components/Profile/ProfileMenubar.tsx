import { useRouter } from "next/router";
import TabButton from "../TabButton";

export default function ProfileMenubar({ username }: { username: string }) {
  const router = useRouter();
  const profileMenuItems = [
    { name: "Posts", link: "/[username]" },
    { name: "About", link: "/[username]/about" },
    { name: "Friends", link: "/[username]/friends" },
    { name: "Photos", link: "/[username]/photos" },
    { name: "Story Archive", link: "/[username]/archive" },
    { name: "Videos", link: "/[username]/videos" },
  ];

  return (
    <div className="sticky top-14 h-14 w-full bg-white shadow flex justify-center z-30">
      <div className="max-w-4xl w-full flex space-x-2 justify-start text-center overflow-scroll px-4">
        {profileMenuItems.map((item, i) => {
          return (
            <TabButton
              key={item.name + i.toString()}
              onClick={(e) => {
                e.preventDefault();
                router.push({
                  pathname: item.link,
                  query: { username },
                });
              }}
              active={router.pathname === item.link}
            >
              {item.name}
            </TabButton>
          );
        })}
      </div>
    </div>
  );
}
