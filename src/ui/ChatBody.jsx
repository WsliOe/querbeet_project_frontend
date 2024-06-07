import styled from "styled-components";
import Button from "./Button";

const ChatMainHeader = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #f9f5eb;
`;

const LeaveChatButton = styled(Button)`
  width: 150px;

  @media (max-width: 809px) {
    width: 130px;
    font-size: 1.2rem;
  }

  @media (max-width: 510px) {
    width: 130px;
    font-size: 0.9rem;
  }
`;

const MessageContainer = styled.div`
  width: 100%;
  height: 55vh;
  background-color: #fff;
  padding: 20px;
  overflow-y: scroll;

  & > * {
    margin-bottom: 10px;
  }
`;

const MessageRecipient = styled.div`
  background-color: var(--color-slate-100);
  max-width: 300px;
  padding: 10px;
  border-radius: 10px;
  font-size: 15px;
`;

const MessageSender = styled.div`
  background-color: var(--color-lime-100);
  max-width: 300px;
  padding: 10px;
  border-radius: 10px;
  margin-left: auto;
  font-size: 15px;
`;

const MessageChats = styled.div`
  & > p {
    font-size: 13px;
  }
`;

const SenderName = styled.div`
  text-align: right;
  font-size: 1.1rem;
`;

export {
  ChatMainHeader,
  LeaveChatButton,
  MessageContainer,
  MessageRecipient,
  MessageSender,
  MessageChats,
  SenderName,
};
