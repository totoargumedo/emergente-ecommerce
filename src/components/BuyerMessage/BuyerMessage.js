import React, { useContext } from "react";

// Librerias
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

// provider

const BuyerMessage = ({ data }) => {
  const { clearCart } = useContext(CartContext);
  return (
    <div>
      <h1>Felicitaciones</h1>
      <h4>Sus puntos de experiencia fueron cargados correctamente</h4>
      <p>{`El personaje ${data.characterName} perteneciente a ${data.username} recibio un total de experiencia de ${data.total}. \n Se envio un correo a ${data.email} con los detalles`}</p>
      <Link to="/tienda">
        <Button basic color="orange" onClick={clearCart}>
          Realizar otro combate
        </Button>
      </Link>
      <Link to="/">
        <Button basic color="blue" onClick={clearCart}>
          Inicio
        </Button>
      </Link>
    </div>
  );
};

export default BuyerMessage;
