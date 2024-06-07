import { memo, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import Spinner from "./Spinner";

const Wrapper = styled.main`
  height: 100vh;
  background-color: var(--color-slate-100);
`;

const Main = styled.main`
  background-color: var(--color-slate-100);
  padding: 4rem 4.8rem 6.4rem;

  @media (max-width: 350px) {
    padding: 2rem 2.4rem 3.2rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const MemoizedHeader = memo(Header);

function AppLayout() {
  return (
    <Wrapper>
      <Suspense fallback={<Spinner />}>
        <MemoizedHeader />
      </Suspense>
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </Wrapper>
  );
}

export default AppLayout;
