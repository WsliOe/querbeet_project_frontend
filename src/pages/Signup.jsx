import { lazy, Suspense } from "react";
import styled from "styled-components";
import {
  Container,
  BackgroundImage,
  AuthenticationLayout,
} from "../ui/Authentication";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";

const SignupForm = lazy(() => import("../features/authentication/SignupForm"));

const SignupLayout = styled(AuthenticationLayout)`
  gap: 1rem;
`;

function Signup() {
  return (
    <Container>
      <BackgroundImage alt="Garten Grosswangen" />
      <SignupLayout>
        <Logo />
        <Heading as="h4">Registration Mitglieder</Heading>
        <Suspense fallback={<Spinner />}>
          <SignupForm />
        </Suspense>
      </SignupLayout>
    </Container>
  );
}

export default Signup;
