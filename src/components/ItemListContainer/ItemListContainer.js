import React from "react";

// COMPONENTES
import ItemList from "../ItemList/ItemList";
// LIBRERIAS
import "./ItemListContainer.css";

export const ItemListContainer = ({ data }) => {
  return (
    <div className="listMain">
      <ItemList data={data} />
    </div>
  );
};
