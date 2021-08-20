import React, { useState, useEffect } from "react";

// LIBRERIAS
import "./ItemList.css";

// COMPONENTES
import { Item } from "../Item/Item";

export const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((respuesta) => setItems(respuesta));
    }, 2000);
  }, []);
  return (
    <div>
      <h1>ITEMS</h1>
      <div className="ItemList">
        {items.slice(0, 8).map((item) => {
          return <Item key={item.id} data={item} />;
        }, 20)}
      </div>
    </div>
  );
};
