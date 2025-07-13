import React from "react";
import { Link } from "react-router-dom";
import "./ChatList.css"; // Agregaremos estilos básicos

const ChatList = ({ chats }) => {
  return (
    <div className="chat-list">
      {Object.entries(chats).map(([id, chat]) => (
        <Link to={`/chat/${id}`} key={id} className="chat-card">
          <img src={chat.avatar} alt={chat.name} className="chat-avatar" />
          <div className="chat-name">{chat.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default ChatList;
