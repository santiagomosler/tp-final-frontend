import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useChat } from "../context/ChatContext.jsx";
import "../components/Chat.css";

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
        <h2>{chat.name}</h2>
      </div>

      <div className="chat-messages">
        {chat.messages.map((msg, index) => (
        <div key={index} className={`message ${msg.from}`}>
          <span>
            {msg.text}
            {msg.from === "me" && (
            <span className="tick"> ✅✅ </span>
            )}
          </span>
          <div className="time-stamp">{msg.time}</div>
        </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="chat-form">
        <input
          type="text"
          placeholder="Escribí un mensaje..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Chat;