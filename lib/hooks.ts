import useSWR from "swr";
import { User } from "./interfaces";

const useUser = (userId?: string) => {
  const { data, error, mutate } = useSWR<User, Error>(
    userId ? `/api/user/${userId}` : "api/user",
  );

  return {
    user: data,
    error,
    isLoading: !error && !data,
    mutateUser: mutate,
  };
};

export { useUser };
