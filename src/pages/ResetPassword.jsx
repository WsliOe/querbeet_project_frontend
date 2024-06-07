import { lazy, Suspense } from "react";
import {
  Container,
  BackgroundImage,
  AuthenticationLayout,
} from "../ui/Authentication";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";

const ResetPasswordForm = lazy(() =>
  import("../features/authentication/ResetPasswordForm")
);

function ResetPassword() {
  return (
    <Container>
      <BackgroundImage />
      <AuthenticationLayout>
        <Logo />
        <Heading as="h4">Passwort zurücksetzen</Heading>
        <Suspense fallback={<Spinner />}>
          <ResetPasswordForm />
        </Suspense>
      </AuthenticationLayout>
    </Container>
  );
}

export default ResetPassword;
