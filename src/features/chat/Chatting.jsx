import { useEffect, useState, useRef } from "react";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import { Chat, ChatMain } from "../../ui/Chatting";
import ChatFooter from "./ChatFooter";

const Chatting = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const lastMessageRef = useRef(null);

  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  useEffect(() => {
    // scroll to bottom every time messages change
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Chat>
      <ChatBar socket={socket} />
      <ChatMain>
        <ChatBody messages={messages} lastMessageRef={lastMessageRef} />
        <ChatFooter socket={socket} />
      </ChatMain>
    </Chat>
  );
};

export default Chatting;
