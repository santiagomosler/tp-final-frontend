import React from "react";
import { Link } from "react-router-dom";
import "./ChatList.css";

const ChatList = ({ chats }) => {
  return (
    <div>
      {Object.entries(chats).map(([id, chat]) => (
        <Link to={`/chat/${id}`} key={id}>
          <div>
            <img src={chat.avatar} alt={chat.name} width={100} />
            <p>{chat.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ChatList;
