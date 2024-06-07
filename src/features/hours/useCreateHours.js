import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendHours } from "../../services/apiHours";
import toast from "react-hot-toast";

export function useCreateHours() {
  const queryClient = useQueryClient();
  const { mutate: createHours, isLoading: isCreating } = useMutation({
    mutationFn: sendHours,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hours"] });
      toast.success("Stunden erfolgreich übertragen.");
    },
    onError: (err) => {
      toast.error("Fehlgeschlagen.");
    },
  });

  return { createHours, isCreating };
}
