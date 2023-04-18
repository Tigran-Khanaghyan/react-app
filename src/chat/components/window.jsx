import React from "react";
import "./window.css";

function Window() {
  return (
    <div>
      <div class="chat-popup" id="myForm">
        <div class="form-container">
          <h1>Chat</h1>
          <div className="conversation-container"></div>

          <label for="msg">
            <b>Message</b>
          </label>
          <textarea placeholder="Type message.." name="msg" required></textarea>

          <button type="submit" class="btn">
            Send
          </button>
          <button type="button" class="btn cancel" onclick="closeForm()">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Window;
