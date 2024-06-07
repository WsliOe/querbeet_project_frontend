import { TbLogout } from "react-icons/tb";
import styled from "styled-components";
import { useLogout } from "./useLogout";
import ButtonIcon from "../../ui/ButtonIcon";
import SpinnerMini from "../../ui/SpinnerMini";

const LogoutIcon = styled(ButtonIcon)`
  @media (max-width: 809px) {
    position: fixed;
    top: 0.9rem;
    right: 12rem;
  }

  @media (max-width: 350px) {
    position: fixed;
    top: 0.9rem;
    right: 9rem;
  }
`;

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <LogoutIcon disabled={isLoading} onClick={logout} aria-label="Logout">
      {!isLoading ? <TbLogout /> : <SpinnerMini />}
    </LogoutIcon>
  );
}

export default Logout;
