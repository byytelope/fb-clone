import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

const ProfileArchive: NextPage = () => {
  const router = useRouter();
  const { data, error: sessionError } =
    useSWR<{ message: string; userId: string }>("/api/session");

  useEffect(() => {
    if (data?.userId == null) {
      router.replace("/login");
    }
  }, [router, data?.userId]);

  return <div>Story Archive</div>;
};

ProfileArchive.displayName = "ProfileArchive";

export default ProfileArchive;
