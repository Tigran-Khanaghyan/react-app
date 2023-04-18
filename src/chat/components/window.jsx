import React, { useEffect, useRef, useState } from "react";
import "./window.css";
import Button from "shared/Button";

function Window() {
  const messagesEndRef = useRef();

  const [message, setMessage] = useState();
  const [conversation, setConversation] = useState([]);

  const sendFirstMessage = () => {
    const newMessage = {
      id: "user1",
      message,
    };

    setConversation((prev) => [...prev, newMessage]);
  };

  const sendSecondMessage = () => {
    const newMessage = {
      id: "user2",
      message,
    };

    setConversation((prev) => [...prev, newMessage]);
  };

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <div>
      <div className="chat-popup" id="myForm">
        <div className="form-container">
          <h1>Chat</h1>
          <div className="conversation-container">
            {conversation.map((item) => {
              const className =
                item.id === "user1" ? "user1-message" : "user2-message";
              const containerclassName = item.id === "user1" ? "left" : "right";
              return (
                <div className={containerclassName}>
                  <span className={className}>{item.message}</span>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          <label htmlFor="msg">
            <b>Message</b>
          </label>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Type message.."
            name="msg"
            required
          ></textarea>

          <Button type="submit" className="btn" onClick={sendFirstMessage}>
            Send user 1
          </Button>
          <Button type="submit" className="btn" onClick={sendSecondMessage}>
            Send user 2
          </Button>
          <Button type="button" className="btn cancel">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Window;
