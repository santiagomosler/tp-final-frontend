import React from "react";
import { Link } from "react-router-dom";
import "./ChatList.css"; // ✅ ya está bien importado

const ChatList = ({ chats }) => {
  return (
    <div className="chat-list"> {/* Aplica estilos de layout */}
      {Object.entries(chats).map(([id, chat]) => (
        <Link to={`/chat/${id}`} key={id} className="chat-item"> {/* Estilo de tarjeta */}
          <img src={chat.avatar} alt={chat.name} className="chat-avatar" />
          <div className="chat-name">{chat.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default ChatList;

