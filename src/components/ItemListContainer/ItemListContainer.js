import React from "react";

// COMPONENTES
import ItemOptions from "../ItemOptions/ItemOptions";
import { ItemCount } from "../ItemCount/ItemCount";
// LIBRERIAS
import "./ItemListContainer.css";

export const ItemListContainer = ({ hello, description }) => {
  return (
    <div className="listMain">
      <h1 className="welcome">{hello}</h1>
      <p>{description}</p>
      <ItemOptions />
      <ItemCount />
    </div>
  );
};
