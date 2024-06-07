import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useResetPassword } from "./useResetPassword";

const Button = React.lazy(() => import("../../ui/Button"));
const Form = React.lazy(() => import("../../ui/Form"));
const Input = React.lazy(() => import("../../ui/Input"));
const FormRowVertical = React.lazy(() => import("../../ui/FormRowVertical"));
const SpinnerMini = React.lazy(() => import("../../ui/SpinnerMini"));

function ResetPasswordForm() {
  const { token } = useParams();
  const { resetPassword, isLoading } = useResetPassword();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();

  function onSubmit({ password, passwordConfirm }) {
    resetPassword(
      { token, password, passwordConfirm },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical
        label="Neues Passwort (mind. 6 Zeichen)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "Eingabefeld ist auszufüllen.",
            minLength: {
              value: 6,
              message: "Passwort mit mind. 6 Zeichen.",
            },
          })}
        />
      </FormRowVertical>
      <FormRowVertical
        label="Neues Passwort bestätigen"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "Eingabefeld ist auszufüllen.",
            validate: (value) =>
              value === getValues().password ||
              "Passwörter müssen übereinstimmen.",
          })}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLoading}>
          {!isLoading ? "Anpassen" : <SpinnerMini />}
        </Button>
        <Button
          variation="secondary"
          type="reset"
          disabled={isLoading}
          onClick={() => {
            reset();
            navigate("/login");
          }}
        >
          Abbrechen
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default ResetPasswordForm;
