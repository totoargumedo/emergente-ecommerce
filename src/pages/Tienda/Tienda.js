import React from "react";

// LIBRERIAS
import "./Tienda.css";

// COMPONENTES
import {ItemListContainer} from "../../components/ItemListContainer/ItemListContainer"

export const Tienda = () => {
  return (
    <div>
      <ItemListContainer
        hello="Welcome to the Store"
        description="This site will have our catalog soon"
      />
    </div>
  );
};

