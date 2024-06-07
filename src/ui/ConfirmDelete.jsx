import React, { lazy, Suspense } from "react";
import styled from "styled-components";
import Spinner from "./Spinner";

const Button = lazy(() => import("./Button"));
const Heading = lazy(() => import("./Heading"));

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-slate-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }

  @media (max-width: 768px) {
    width: calc(100% - 2rem);
  }
`;

function Delete({ onConfirm, disabled, onCloseModal }) {
  return (
    <StyledConfirmDelete>
      <Suspense fallback={<Spinner />}>
        <Heading as="h3">Eintrag löschen</Heading>
        <p>Willst du die Stunden wirklich unwiderruflich löschen?</p>

        <div>
          <Button
            variation="secondary"
            disabled={disabled}
            onClick={onCloseModal}
          >
            Abbrechen
          </Button>
          <Button variation="danger" disabled={disabled} onClick={onConfirm}>
            Löschen
          </Button>
        </div>
      </Suspense>
    </StyledConfirmDelete>
  );
}

const ConfirmDelete = React.memo(Delete);

export default ConfirmDelete;
