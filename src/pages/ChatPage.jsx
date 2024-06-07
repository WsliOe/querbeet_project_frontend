import { memo, lazy, Suspense } from "react";
import Spinner from "../ui/Spinner";

const Chatting = lazy(() => import("../features/chat/Chatting"));

const MemoizedChatting = memo(Chatting);

function ChatPage({ socket }) {
  return (
    <Suspense fallback={<Spinner />}>
      <MemoizedChatting socket={socket} />
    </Suspense>
  );
}

export default ChatPage;
