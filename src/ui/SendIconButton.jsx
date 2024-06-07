import React, { lazy, Suspense } from "react";
import { IoIosSend } from "react-icons/io";
import styled from "styled-components";
import Spinner from "./Spinner";

const ButtonIcon = lazy(() => import("./ButtonIcon"));

const SendIcon = styled(ButtonIcon)`
  &:hover {
    background-color: transparent;
  }
  @media (min-width: 810px) {
    display: none;
  }
`;

function Send() {
  return (
    <Suspense fallback={<Spinner />}>
      <SendIcon aria-label="Nachricht senden" title="Nachricht senden">
        <IoIosSend />
      </SendIcon>
    </Suspense>
  );
}

const SendIconButton = React.memo(Send);

export default SendIconButton;
