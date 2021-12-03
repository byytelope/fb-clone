import useSWR from "swr";
import { User } from "./interfaces";

const useUser = (userId?: string) => {
  const { data, error, mutate } = useSWR<
    { message: string; user: User },
    Error
  >(
    userId ? `/api/user/${userId}` : "api/user",
  );

  if (data?.message !== "Success") {
    return {
      user: undefined,
      error: { message: data?.message, error },
    };
  } else {
    return {
      user: data.user,
      isLoading: !error && !data,
      mutateUser: mutate,
    };
  }
};

export { useUser };
