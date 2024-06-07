import React from "react";
import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: var(--color-slate-50);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-slate-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 809px) {
    padding: 0.6rem 4.8rem;
  }

  @media (max-width: 350px) {
    padding: 0.6rem 2.4rem;
  }
`;

function HeaderFunction() {
  return (
    <StyledHeader>
      <Logo />
      <MainNav />
      <HeaderMenu />
    </StyledHeader>
  );
}

const Header = React.memo(HeaderFunction);

export default Header;
