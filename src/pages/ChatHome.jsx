import { memo, lazy, Suspense } from "react";
import Spinner from "../ui/Spinner";

const Row = lazy(() => import("../ui/Row"));
const JoinChat = lazy(() => import("../features/chat/JoinChat"));

const MemoizedJoinChat = memo(JoinChat);

function ChatHome({ socket }) {
  return (
    <Suspense fallback={<Spinner />}>
      <Row type="horizontal"></Row>
      <MemoizedJoinChat socket={socket} />
    </Suspense>
  );
}

export default ChatHome;
