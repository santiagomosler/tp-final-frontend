import React, { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState({
    rachel: {
      name: "Rachel",
      avatar: "/images/rachel.jpg",
      messages: [
        {
          from: "them",
          text: "What if I want to be a purse, you know, or a hat!",
          time: "11:30 AM",
          timestamp: new Date("2023-12-01T11:30:00").getTime(),
        },
      ],
    },
    ross: {
      name: "Ross",
      avatar: "/images/ross.jpg",
      messages: [
        {
          from: "them",
          text: "Did I tell you about the dinosaurs?",
          time: "12:54 PM",
          timestamp: new Date("2023-12-01T12:54:00").getTime(),
        },
      ],
    },
    monica: {
      name: "Monica",
      avatar: "/images/monica.jpeg",
      messages: [
        {
          from: "them",
          text: "Welcome to the real world. It sucks. You’re gonna love it.",
          time: "01:50 PM",
          timestamp: new Date("2023-12-01T13:50:00").getTime(),
        },
      ],
    },
    joey: {
      name: "Joey",
      avatar: "/images/joey.jpg",
      messages: [
        {
          from: "them",
          text: "How you doin'?",
          time: "03:15 PM",
          timestamp: new Date("2023-12-01T15:15:00").getTime(),
        },
      ],
    },
    phoebe: {
      name: "Phoebe",
      avatar: "/images/phoebe.jpg",
      messages: [
        {
          from: "them",
          text: "They don't know that we know they know we know!",
          time: "04:25 PM",
          timestamp: new Date("2023-12-01T16:25:00").getTime(),
        },
      ],
    },
    chandler: {
      name: "Chandler",
      avatar: "/images/chandler.jpg",
      messages: [
        {
          from: "them",
          text: "Could I BE wearing any more clothes?",
          time: "07:30 PM",
          timestamp: new Date("2023-12-01T19:30:00").getTime(),
        },
      ],
    },
  });


  const sendMessage = (characterId, messageText) => {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const timestamp = now.getTime();

    setChats((prevChats) => {
      const updatedMessages = [
        ...prevChats[characterId].messages,
        {
        from: "me",
        text: messageText,
        time: time,
        timestamp: timestamp,
        delivered: true, // esto lo podrías usar para estados futuros
      },
    ];

      return {
      ...prevChats,
      [characterId]: {
        ...prevChats[characterId],
        messages: updatedMessages,
      },
    };
  });
}

  return (
    <ChatContext.Provider value={{ chats, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);