import React from "react";
import Chat from "./Chat";
import ChatInput from "./ChatInput";

function ChatDisplay({ user, clickedUser }) {
  return (
    <div>
      <Chat />
      <ChatInput />
    </div>
  );
}

export default ChatDisplay;
