import { useState, useEffect } from "react";
import { ChatSidebar, ChatHeader, ChatUsers } from "../../ui/ChatSidebar";

const ChatBar = ({ socket }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("newUserResponse", (data) => setUsers(data));
  }, [socket, users]);

  return (
    <ChatSidebar>
      <h2>Chat</h2>
      <div>
        <ChatHeader>Aktive User</ChatHeader>
        <ChatUsers>
          {users.map((user) => (
            <p key={user.socketID}>{user.userName}</p>
          ))}
        </ChatUsers>
      </div>
    </ChatSidebar>
  );
};

export default ChatBar;
