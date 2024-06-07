import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const COLORS = {
  primaryDark: "var(--color-lime-950)",
  primaryLight: "var(--color-lime-50)",
};

const Screen = styled.div`
  @media (min-width: 810px) {
    display: none;
  }
`;

const HamburgerButton = styled.button`
  background-color: ${COLORS.primaryLight};
  position: fixed;
  top: 0.6rem;
  right: 6rem;
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;
  border: none;

  @media (max-width: 350px) {
    right: 3rem;
  }
`;

const NavBackground = styled.div`
  position: fixed;
  top: 6.5rem;
  right: 6.5rem;
  background-image: radial-gradient(
    ${COLORS.primaryDark},
    ${COLORS.primaryLight}
  );
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  z-index: 600;
  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
  transition: transform 0.8s;
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  width: 3rem;
  height: 2px;
  display: inline-block;
  margin-top: 2.5rem;
  transition: all 0.3s;

  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 3rem;
    height: 2px;
    display: inline-block;

    position: absolute;
    left: 0;
    transition: all 0.3s;
  }

  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};

    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }

  ${HamburgerButton}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
  ${HamburgerButton}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
`;

const Navigation = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 600;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};

  transition: width 0.8s, opacity 0.8s;
`;

const List = styled.ul`
  position: absolute;
  list-style: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`;
const ItemLink = styled(NavLink)`
  display: inline-block;
  font-size: 3rem;
  font-weight: 300;
  text-decoration: none;
  color: ${COLORS.primaryLight};
  padding: 1rem 2rem;

  background-image: linear-gradient(120deg, transparent 0%, transparent 50%);
  background-size: 240%;
  transition: all 0.4s;

  &:hover,
  &:active {
    background-position: 100%;
    color: var(--color-slate-300);

    transform: translateX(1rem);
  }
`;

function Menu() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <Screen>
        <HamburgerButton
          onClick={handleClick}
          aria-label="Menü öffnen"
          title="Menü öffnen"
        >
          <Icon clicked={click ? 1 : 0}>&nbsp;</Icon>
        </HamburgerButton>
        <NavBackground clicked={click ? 1 : 0}>&nbsp;</NavBackground>

        <Navigation clicked={click ? 1 : 0}>
          <List>
            <li>
              <ItemLink onClick={handleClick} to="/hours">
                Stunden
              </ItemLink>
            </li>
            <li>
              <ItemLink onClick={handleClick} to="/chat-home">
                Chat
              </ItemLink>
            </li>
          </List>
        </Navigation>
      </Screen>
    </>
  );
}

const HamburgerMenu = React.memo(Menu);

export default HamburgerMenu;
