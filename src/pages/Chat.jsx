import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useChat } from "../context/ChatContext.jsx";
import "../components/Chat.css"; // Importa los estilos del chat

const Chat = () => {
  const { id } = useParams(); // `id` será "rachel", "ross", etc.
  const { chats, sendMessage } = useChat(); // Contexto global

  const chat = chats[id]; // Obtenemos el chat correspondiente
  const [newMessage, setNewMessage] = useState(""); // Estado del input

  // Si el chat no existe, mostramos mensaje de error
  if (!chat) return <p>Chat no encontrado.</p>;

  // Enviar el mensaje cuando se envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      sendMessage(id, newMessage); // Se actualiza el contexto
      setNewMessage(""); // Se limpia el input
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
            <span>{msg.text}</span>
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

