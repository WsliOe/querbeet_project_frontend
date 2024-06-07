import { useEffect } from "react";
import { useIsLoggedIn } from "../features/authentication/useIsLoggedIn";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, isLoading } = useIsLoggedIn();
  const navigate = useNavigate();

  useEffect(() => {
    function checkIsLoggedIn() {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("jwt="));
      if (token) {
        isLoggedIn();
      } else {
        navigate("/login");
      }
    }
    checkIsLoggedIn();
  }, [isLoggedIn, navigate]);

  if (isLoading) return <Spinner />;

  return children;
};

export default ProtectedRoute;
