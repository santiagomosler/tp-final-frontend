import React, { createContext, useContext, useState } from "react";

// Creamos el contexto
const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState({
    rachel: {
      name: "Rachel",
      avatar: "/src/assets/rachel.jpg",
      messages: [
        { from: "them", text: "¡Hola! ¿Cómo estás?" },
        { from: "me", text: "Todo bien, ¿vos?" },
      ],
    },
    ross: {
      name: "Ross",
      avatar: "/src/assets/ross.jpg",
      messages: [
        { from: "them", text: "¿Te conté lo de los dinosaurios?" },
      ],
    },
    monica: {
      name: "Monica",
      avatar: "/src/assets/monica.jpeg",
      messages: [
        { from: "them", text: "¡Hice lasaña! ¿Querés venir?" },
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
        { from: "them", text: "Smelly cat, smelly cat..." },
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