import React from "react";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import LoginForm from "../features/authentication/LoginForm";
import {
  Container,
  BackgroundImage,
  AuthenticationLayout,
} from "../ui/Authentication";

const MemoizedLogo = React.memo(Logo);
const MemoizedHeading = React.memo(Heading);
const MemoizedLoginForm = React.memo(LoginForm);

function Login() {
  return (
    <Container>
      <BackgroundImage />
      <AuthenticationLayout>
        <MemoizedLogo />
        <MemoizedHeading as="h4">Login Mitglieder</MemoizedHeading>
        <MemoizedLoginForm />
      </AuthenticationLayout>
    </Container>
  );
}

export default Login;
