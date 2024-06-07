import { useState, useCallback, lazy } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Heading = lazy(() => import("../../ui/Heading"));
const Button = lazy(() => import("../../ui/Button"));
const Form = lazy(() => import("../../ui/Form"));
const Input = lazy(() => import("../../ui/Input"));
const FormRowVertical = lazy(() => import("../../ui/FormRowVertical"));

const ChatLayout = styled.main`
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;

  @media (max-width: 670px) {
    grid-template-columns: 80%;
  }
`;

const JoinChat = ({ socket }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!userName) return;
      localStorage.setItem("userName", userName);
      socket.emit("newUser", { userName, socketID: socket.id });
      navigate("/chat-page");
    },
    [userName, navigate, socket]
  );

  return (
    <ChatLayout>
      <Form onSubmit={handleSubmit}>
        <Heading as="h4">Chat</Heading>
        <FormRowVertical label="Name">
          <Input
            type="text"
            name="username"
            id="username"
            autoComplete="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </FormRowVertical>
        <FormRowVertical>
          <Button size="large">Beitreten</Button>
        </FormRowVertical>
      </Form>
    </ChatLayout>
  );
};

export default JoinChat;
