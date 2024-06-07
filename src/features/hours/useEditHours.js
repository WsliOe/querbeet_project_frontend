import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateHours } from "../../services/apiHours";
import { toast } from "react-hot-toast";

export function useEditHours() {
  const queryClient = useQueryClient();

  const { mutate: editHours, isLoading: isEditing } = useMutation({
    mutationFn: ({ newHoursData, _id }) => {
      return updateHours({ hoursId: _id, data: newHoursData });
    },
    onSuccess: () => {
      toast.success("Stunden erfolgreich bearbeitet.");
      queryClient.invalidateQueries({ queryKey: ["hours"] });
    },
    onError: (err) => {
      console.error("Edit Hours Error:", err);
      toast.error(err.message);
    },
  });

  return { isEditing, editHours };
}
