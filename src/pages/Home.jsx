import React from "react";
import { useChat } from "../context/ChatContext.jsx";
import ChatList from "../components/ChatList.jsx";


const Home = () => {
  const { chats } = useChat();

  return (
    <div>
      <h2>Elegí un personaje para chatear</h2>
      <ChatList chats={chats} />
    </div>
  );
};

export default Home;