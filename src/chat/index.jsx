import React from "react";
import Button from "shared/Button";
import Window from "./components/window";
import "./index.css";

function Chat() {
  return (
    <div className="chat-container">
      <Button className="chat-button">Chat</Button>
      <Window />
    </div>
  );
}

export default Chat;
