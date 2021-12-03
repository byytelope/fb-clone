import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";
import CommonHead from "../components/CommonHead";

const Friends: NextPage = () => {
  const router = useRouter();
  const { data, error: sessionError } =
    useSWR<{ message: string; userId: string }>("/api/session");

  useEffect(() => {
    if (data?.userId == null) {
      router.replace("/login");
    }
  }, [router, data?.userId]);

  return (
    <div className="flex justify-center">
      <div className="max-w-4xl w-full px-4">
        <CommonHead title="Friends | Facebook" />
        <span>Friends</span>
        <div className="h-screen" />
        <div className="h-screen" />
        <div className="h-screen" />
      </div>
    </div>
  );
};

export default Friends;
