import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdChatboxes } from "react-icons/io";
import { MdMoreTime } from "react-icons/md";
import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 809px) {
    display: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-slate-300);
    font-size: 2rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-slate-800);
  }

  & svg {
    width: 2.9rem;
    height: 2.9rem;
    color: var(--color-slate-300);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-slate-800);
  }
`;

const Text = styled.span`
  color: var(--color-slate-900);
  font-weight: 700;
`;

function Nav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/hours">
            <MdMoreTime />
            <Text>Stunden</Text>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/chat-home">
            <IoMdChatboxes />
            <Text>Chat</Text>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

const MainNav = React.memo(Nav);

export default MainNav;
