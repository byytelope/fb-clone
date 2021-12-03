import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

const ProfileAbout: NextPage = () => {
  const { data, error: sessionError } =
    useSWR<{ message: string; userId: string }>("/api/session");
  const router = useRouter();

  useEffect(() => {
    if (data?.userId == null) {
      router.replace("/login");
    }
  }, [router, data?.userId]);

  return <div>About</div>;
};

ProfileAbout.displayName = "ProfileAbout";

export default ProfileAbout;
