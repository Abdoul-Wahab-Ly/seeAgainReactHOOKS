import React, { useState } from "react";

const ClientForm = ({ onClientAdd }) => {
  const [nouveauClient, setNouveauClient] = useState("");

  const handleChange = (e) => setNouveauClient(e.currentTarget.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = new Date().getTime();
    const nom = nouveauClient;

    onClientAdd({ id, nom });

    setNouveauClient("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={nouveauClient}
        onChange={handleChange}
        type="text"
        placeholder="Ajouter un client"
      />
      <button>Confirmer</button>
    </form>
  );
};

export default ClientForm;
