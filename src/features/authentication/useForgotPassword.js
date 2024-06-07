import { useMutation } from "@tanstack/react-query";
import { forgotPassword as forgotPasswordApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useForgotPassword() {
  const { mutate: forgotPassword, isLoading: isForgotPasswordLoading } =
    useMutation({
      mutationFn: forgotPasswordApi,
      onSuccess: () => {
        toast.success("E-Mail zum Zurücksetzen des Passworts wurde gesendet.");
      },
      onError: (err) => {
        console.error(err);
        toast.error(err.message);
      },
    });

  return { forgotPassword, isForgotPasswordLoading };
}
