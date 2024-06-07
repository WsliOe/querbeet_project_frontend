import styled from "styled-components";

const ChatSidebar = styled.div`
  height: 100%;
  background-color: #f9f5eb;
  flex: 0.2;
  padding: 20px;
  border-right: 1px solid #fdfdfd;

  @media (max-width: 530px) {
    display: none;
  }
`;

const ChatHeader = styled.div`
  margin: 30px 0 20px 0;
`;

const ChatUsers = styled.div`
  & > * {
    margin-bottom: 10px;
    color: #607eaa;
    font-size: 14px;
  }
`;

export { ChatSidebar, ChatHeader, ChatUsers };
