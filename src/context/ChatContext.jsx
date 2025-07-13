import React, { createContext, useContext, useState } from "react";

// Creamos el contexto
const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState({
    rachel: {
      name: "Rachel",
      avatar: "/src/assets/rachel.jpg",
      messages: [
        { from: "them", text: "What if I want to be a purse, you know, or a hat!" },
      ],
    },
    ross: {
      name: "Ross",
      avatar: "/src/assets/ross.jpg",
      messages: [
        { from: "them", text: "Did I tell you about the dinosaurs?" },
      ],
    },
    monica: {
      name: "Monica",
      avatar: "/src/assets/monica.jpeg",
      messages: [
        { from: "them", text: "Welcome to the real world. It sucks. You’re gonna love it." },
      ],
    },
    joey: {
      name: "Joey",
      avatar: "/src/assets/joey.jpg",
      messages: [
        { from: "them", text: "How you doin'?" },
      ],
    },
    phoebe: {
      name: "Phoebe",
      avatar: "/src/assets/phoebe.jpg",
      messages: [
        { from: "them", text: "They don't know that we know they know we know!" },
      ],
    },
    chandler: {
      name: "Chandler",
      avatar: "/src/assets/chandler.jpg",
      messages: [
        { from: "them", text: "Could I BE wearing any more clothes?" },
      ],
    },
  });

  const sendMessage = (characterId, messageText) => {
    setChats((prevChats) => {
      const updatedMessages = [
        ...prevChats[characterId].messages,
        { from: "me", text: messageText },
      ];

      return {
        ...prevChats,
        [characterId]: {
          ...prevChats[characterId],
          messages: updatedMessages,
        },
      };
    });
  };

  return (
    <ChatContext.Provider value={{ chats, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);