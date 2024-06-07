import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSignup } from "./useSignup";
import styled from "styled-components";

const Button = React.lazy(() => import("../../ui/Button"));
const Form = React.lazy(() => import("../../ui/Form"));
const FormRowVertical = React.lazy(() => import("../../ui/FormRowVertical"));
const Input = React.lazy(() => import("../../ui/Input"));
const SpinnerMini = React.lazy(() => import("../../ui/SpinnerMini"));

// Email regex: /\S+@\S+\.\S+/

const GoToLogin = styled.div`
  text-align: center;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 150%;
  margin-top: 2.4rem;
  display: flex;
  justify-content: center;
`;

const LoginRoute = styled.span`
  color: #633cff;
  cursor: pointer;
`;

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();

  function onSubmit({ firstName, lastName, email, password, passwordConfirm }) {
    signup(
      { firstName, lastName, email, password, passwordConfirm },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical label="Vorname" error={errors?.firstName?.message}>
        <Input
          type="text"
          id="firstName"
          disabled={isLoading}
          {...register("firstName", {
            required: "Eingabefeld ist auszufüllen.",
          })}
        />
      </FormRowVertical>

      <FormRowVertical label="Nachname" error={errors?.lastName?.message}>
        <Input
          type="text"
          id="lastName"
          disabled={isLoading}
          {...register("lastName", {
            required: "Eingabefeld ist auszufüllen.",
          })}
        />
      </FormRowVertical>

      <FormRowVertical label="E-Mail" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          autoComplete="username"
          disabled={isLoading}
          {...register("email", {
            required: "Eingabefeld ist auszufüllen.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Bitte gib eine gültige E-Mail-Adresse an.",
            },
          })}
        />
      </FormRowVertical>

      <FormRowVertical
        label="Passwort (mind. 6 Zeichen)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          autoComplete="new-password"
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
        label="Passwort bestätigen"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          id="passwordConfirm"
          autoComplete="new-password"
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
          {!isLoading ? "Erstellen" : <SpinnerMini />}
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
      <GoToLogin>
        Bereits ein Account?&nbsp;{" "}
        <LoginRoute onClick={() => navigate("/login")}>Login</LoginRoute>
      </GoToLogin>
    </Form>
  );
}

export default SignupForm;
