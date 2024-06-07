import { memo } from "react";
import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import HamburgerMenu from "./HamburgerMenu";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;
const MemoizedLogout = memo(Logout);
const MemoizedHamburgerMenu = memo(HamburgerMenu);

function HeaderMenu() {
  return (
    <StyledHeaderMenu>
      <li>
        <MemoizedLogout />
      </li>

      <li>
        <MemoizedHamburgerMenu />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
