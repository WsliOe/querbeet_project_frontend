import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "./useLogin";
import { useForgotPassword } from "./useForgotPassword";
import styled from "styled-components";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import SpinnerMini from "../../ui/SpinnerMini";

const GoToOther = styled.div`
  text-align: center;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 150%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;

  &:nth-child(3) {
    margin-top: 0.5rem;
  }
`;

const OtherRoute = styled.span`
  color: #633cff;
  cursor: pointer;
`;

function LoginForm() {
  const [email, setEmail] = useState("info3@anna.ch");
  const [password, setPassword] = useState("werwosduf");
  const { login, isLoading } = useLogin();
  const { forgotPassword, isForgotPasswordLoading } = useForgotPassword();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  function handleForgotPassword() {
    if (!email) return;
    forgotPassword(email);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="E-Mail">
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical label="Passwort">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLoading}>
          {!isLoading ? "Einloggen" : <SpinnerMini />}
        </Button>
        <GoToOther>
          Noch kein Account?&nbsp;{" "}
          <OtherRoute onClick={() => navigate("/signup")}>
            Registrieren
          </OtherRoute>
        </GoToOther>
        <GoToOther>
          Passwort vergessen?&nbsp;{" "}
          <OtherRoute
            onClick={handleForgotPassword}
            disabled={isForgotPasswordLoading}
          >
            Zurücksetzen
          </OtherRoute>
        </GoToOther>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
