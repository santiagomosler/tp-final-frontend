import React from "react";
import { useChat } from "../context/ChatContext.jsx";
import ChatList from "../components/ChatList.jsx";
import "../styles/Home.css";

const Home = () => {
  const { chats } = useChat();

  return (
    <div className="home-container">
      <a href="/" className="home-title">WhatsApp</a>
      <ChatList chats={chats} />
    </div>
  );
};

export default Home;
