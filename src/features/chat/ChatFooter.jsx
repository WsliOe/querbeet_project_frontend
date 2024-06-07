import { useState } from "react";
import {
  ChatFooterContainer,
  Form,
  Message,
  SendButton,
} from "../../ui/ChatFooter";
import SendIconButton from "../../ui/SendIconButton";

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState("");
  const handleTyping = () =>
    socket.emit("typing", `${localStorage.getItem("userName")} is typing`);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem("userName")) {
      socket.emit("message", {
        text: message,
        name: localStorage.getItem("userName"),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage("");
  };
  return (
    <ChatFooterContainer>
      <Form onSubmit={handleSendMessage}>
        <Message
          type="text"
          id="message"
          placeholder="Nachricht schreiben"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleTyping}
        />
        <SendIconButton
          aria-label="Nachricht senden"
          title="Nachricht senden"
        />
        <SendButton aria-label="Senden" title="Senden">
          Senden
        </SendButton>
      </Form>
    </ChatFooterContainer>
  );
};

export default ChatFooter;
