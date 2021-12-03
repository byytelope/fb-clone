import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

const ProfilePhotos: NextPage = () => {
  const router = useRouter();
  const { data, error: sessionError } =
    useSWR<{ message: string; userId: string }>("/api/session");

  useEffect(() => {
    if (data?.userId == null) {
      router.replace("/login");
    }
  }, [router, data?.userId]);

  return <div>Photos</div>;
};

ProfilePhotos.displayName = "ProfilePhotos";

export default ProfilePhotos;
