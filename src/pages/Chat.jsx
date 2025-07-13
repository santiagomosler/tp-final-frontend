import React from "react";
import { useParams } from "react-router-dom";

const Chat = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Estás chateando con: {id}</h2>
    </div>
  );
};

export default Chat;
