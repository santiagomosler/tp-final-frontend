import React from "react";
import { useChat } from "./context/ChatContext.jsx";

const App = () => {
  const { chats } = useChat(); // Obtenemos los datos globales

  // ✔️ Verificamos en consola que los chats están bien definidos
  console.log("Chats disponibles:", chats);

  return (
    <div>
      <h1>App funcionando</h1>
      <p>Revisá la consola para ver los chats cargados.</p>
    </div>
  );
};

export default App;

