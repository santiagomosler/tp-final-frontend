import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useChat } from "../context/ChatContext.jsx";
import "../styles/Chat.css";

const Chat = () => {
  const { id } = useParams();
  const { chats, sendMessage } = useChat();
  const chat = chats[id];
  const [newMessage, setNewMessage] = useState("");

  if (!chat) return <p>Chat no encontrado.</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      sendMessage(id, newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <img src={chat.avatar} alt={chat.name} className="chat-avatar" />
        <h2 className="chat-name">{chat.name}</h2>
      </div>

      <div className="chat-messages">
        {chat.messages.map((msg, index) => (
          <div key={index} className={`message ${msg.from}`}>
            <div className="message-content">
              <span className="message-text">{msg.text}</span>
              <div className="message-meta">
                <span className="message-time">{msg.time}</span>
                {msg.from === "me" && (
                <span className="message-tick">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z"/>
                  </svg>
                </span>
                )}
              </div>
            </div>
</div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="chat-form">
        <input
          type="text"
          placeholder="Escribe un mensaje"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
          </svg>
        </button>

      </form>
    </div>
  );
};

export default Chat;
