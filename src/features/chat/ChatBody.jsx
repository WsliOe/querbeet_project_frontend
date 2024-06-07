import { useNavigate } from "react-router-dom";
import {
  ChatMainHeader,
  LeaveChatButton,
  MessageContainer,
  MessageRecipient,
  MessageSender,
  MessageChats,
  SenderName,
} from "../../ui/ChatBody";

const ChatBody = ({ messages, lastMessageRef }) => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    navigate("/chat-home");
    window.location.reload();
  };

  return (
    <>
      <ChatMainHeader>
        <p>Chatroom</p>
        <LeaveChatButton
          variation="secondary"
          type="reset"
          onClick={handleLeaveChat}
        >
          Chat verlassen
        </LeaveChatButton>
      </ChatMainHeader>

      <MessageContainer>
        {messages.map((message) =>
          message.name === localStorage.getItem("userName") ? (
            <MessageChats key={message.id}>
              <SenderName>Du</SenderName>
              <MessageSender>
                <p>{message.text}</p>
              </MessageSender>
            </MessageChats>
          ) : (
            <MessageChats key={message.id}>
              <p>{message.name}</p>
              <MessageRecipient>
                <p>{message.text}</p>
              </MessageRecipient>
            </MessageChats>
          )
        )}

        <div ref={lastMessageRef} />
      </MessageContainer>
    </>
  );
};

export default ChatBody;
