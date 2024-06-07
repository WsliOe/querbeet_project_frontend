import styled from "styled-components";
import Button from "./Button";

const ChatFooterContainer = styled.div`
  padding: 10px;
  background-color: #f9f5eb;
  height: 10vh;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Message = styled.input`
  width: 80%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid #ddd;
  outline: none;
  padding: 15px;
  font-size: 1.5rem;

  @media (max-width: 809px) {
    width: 90%;
    font-size: 1.2rem;
  }
`;

const SendButton = styled(Button)`
  width: 18%;

  @media (max-width: 809px) {
    display: none;
  }
`;

export { ChatFooterContainer, Form, Message, SendButton };
