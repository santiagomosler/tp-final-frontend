import React from "react";
import { Link } from "react-router-dom";
import "./ChatList.css";

const ChatList = ({ chats }) => {
  // Convertimos a array y ordenamos por último timestamp (descendente)
  const sortedChats = Object.entries(chats).sort(([, a], [, b]) => {
    const timeA = a.messages[a.messages.length - 1]?.timestamp || 0;
    const timeB = b.messages[b.messages.length - 1]?.timestamp || 0;
    return timeB - timeA;
  });

  return (
    <div className="chat-list">
      {sortedChats.map(([id, chat]) => {
        const lastMessage = chat.messages[chat.messages.length - 1];

        return (
          <Link to={`/chat/${id}`} key={id} className="chat-item">
            <img src={chat.avatar} alt={chat.name} className="chat-avatar" />

            <div className="chat-content">
              <div className="chat-header">
                <span className="chat-name">{chat.name}</span>
                <span className="chat-time">{lastMessage?.time || ""}</span>
              </div>

              <div className="chat-preview">
                {lastMessage?.text?.slice(0, 30)}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ChatList;



