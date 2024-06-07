import { useMutation, useQueryClient } from "@tanstack/react-query";
import { resetPassword as resetPasswordApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

export function useResetPassword() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: resetPassword, isPending: isLoading } = useMutation({
    mutationFn: ({ token, password, passwordConfirm }) =>
      resetPasswordApi(token, password, passwordConfirm),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
      Cookies.set("jwt", user.token);
      toast.success("Passwort erfolgreich zurückgesetzt.");
      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 1000);
    },
    onError: (err) => {
      toast.error("Fehlgeschlagen!");
    },
  });

  return { resetPassword, isLoading };
}
