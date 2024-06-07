import styled from "styled-components";
import img from "/ruezlingen.jpg";

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
`;

const AuthenticationLayout = styled.main`
  position: relative;
  z-index: 2;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-slate-50);
  padding: 2rem;

  @media (max-width: 670px) {
    grid-template-columns: 80%;
  }
`;

export { Container, BackgroundImage, AuthenticationLayout };
