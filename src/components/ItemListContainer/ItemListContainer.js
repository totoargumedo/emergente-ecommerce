import React from "react";

// COMPONENTES
import { ItemList } from "../ItemList/ItemList";
// LIBRERIAS
import "./ItemListContainer.css";

export const ItemListContainer = ({ hello, description }) => {
  return (
    <div className="listMain">
      <h1 className="welcome">{hello}</h1>
      <p>{description}</p>
      <ItemList />
    </div>
  );
};
