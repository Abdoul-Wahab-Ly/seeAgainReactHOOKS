import "./styles.css";
import React, { useState } from "react";
import Client from "./Client";
import ClientForm from "./ClientForm";

const App = () => {
  const [clients, setClients] = useState([
    { id: 1, nom: "Mouhamed" },
    { id: 2, nom: "Ousmane" },
    { id: 3, nom: "Cheikh Tidjan" }
  ]);

  const handleDelete = (id) => {
    const updatedClients = [...clients];
    const index = updatedClients.findIndex((client) => client.id === id);
    updatedClients.splice(index, 1);
    setClients(updatedClients);
  };

  const handleAdd = (client) => {
    const updatedClients = [...clients];
    updatedClients.push(client);
    setClients(updatedClients);
  };

  const title = "Liste des Clients";

  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {clients.map((client) => (
          <Client details={client} onDelete={handleDelete} />
        ))}
      </ul>
      <ClientForm onClientAdd={handleAdd} />
    </div>
  );
};

export default App;
