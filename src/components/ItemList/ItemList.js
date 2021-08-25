import React, { useState, useEffect } from "react";

// LIBRERIAS
import "./ItemList.css";

// COMPONENTES
import { Item } from "../Item/Item";
import { LoaderSpinner } from "../LoaderSpinner/LoaderSpinner";

export const ItemList = () => {
  const [items, setItems] = useState([]);
  const apiDungeon = "https://www.dnd5eapi.co/api/monsters";
  const [gettingData, setGettingData] = useState(true);

  useEffect(() => {
    fetch(apiDungeon)
      .then((response) => response.json())
      .then((respuesta) => setItems(respuesta.results));
    setTimeout(() => {
      setGettingData(false);
    }, 3000);
  }, []);
  return (
    <div>
      <h1>GALERIA RANDOM</h1>
      <p>API usada: http://www.dnd5eapi.co/</p>
      {gettingData ? (
        <LoaderSpinner />
      ) : (
        <div className="ItemList">
          {items.slice(0, 12).map((item) => {
            return (
              <Item
                key={item.index}
                data={item}
                url={apiDungeon + item.index}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
