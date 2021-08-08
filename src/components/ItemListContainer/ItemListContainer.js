import React from "react";

// LIBRERIAS
import "./ItemListContainer.css";

export const ItemListContainer = ({ hello, description }) => {
  return (
    <div clasName="listMain">
      <h1 className="welcome">{hello}</h1>
      <p>{description}</p>
    </div>
  );
};
