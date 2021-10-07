import React, { useState } from "react";
// LIBRERIAS
import { Button, Form } from "semantic-ui-react";
import BuyerMessage from "../BuyerMessage/BuyerMessage";
import { collection, addDoc } from "firebase/firestore";

// firestore
import db from "../../firebase/firebaseConfig";

const BuyerForm = ({ endCompraNow, total }) => {
  const [username, setUsername] = useState(``);

  const [characterName, setCharacterName] = useState(``);

  const [email, setEmail] = useState(``);

  const handleOnChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "characterName") {
      setCharacterName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    }
  };
  // Mensaje de salida
  const [goodbye, setGoodbye] = useState(false);
  const handleGoodbye = async (e) => {
    e.preventDefault();
    const buyer = await addDoc(collection(db, "batallas"), {
      name: username,
      character: characterName,
      email: email,
      xp_gained: total,
    });
    setGoodbye(!goodbye);
  };

  return (
    <div>
      {goodbye ? (
        <BuyerMessage data={{ username, characterName, email, total }} />
      ) : (
        <Form>
          <Form.Field>
            <label htmlFor="username">Nombre Jugador</label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={handleOnChange}
              placeholder="Nombre Jugador"
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="characterName">Nombre Personaje</label>
            <input
              type="text"
              name="characterName"
              id="characterName"
              value={characterName}
              onChange={handleOnChange}
              placeholder="Nombre Personaje"
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Email"
            />
          </Form.Field>
          <Button type="submit" onClick={handleGoodbye}>
            Enviar
          </Button>
          <Button onClick={endCompraNow}>Volver</Button>
        </Form>
      )}
    </div>
  );
};

export default BuyerForm;
