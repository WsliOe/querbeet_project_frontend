import { useQuery } from "@tanstack/react-query";
import { getHours } from "../../services/apiHours";

export default function useHours() {
  const {
    isLoading,
    data: hours,
    error,
  } = useQuery({
    queryKey: ["hours"],
    queryFn: getHours,
  });

  return { isLoading, error, hours };
}
