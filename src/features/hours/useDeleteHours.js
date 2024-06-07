import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteHours as deleteHoursApi } from "../../services/apiHours";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useDeleteHours() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: deleteHours, isLoading: isDeleting } = useMutation({
    mutationFn: deleteHoursApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hours"] });
      navigate("/hours", { replace: true });
      toast.success("Stunden erfolgreich gelöscht.");
    },
    onError: (err) => {
      toast.error("Fehlgeschlagen.");
    },
  });

  return { deleteHours, isDeleting };
}
