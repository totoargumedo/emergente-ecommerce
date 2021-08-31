import React, { useState, useEffect } from "react";

// LIBRERIAS
import "./ItemList.css";
import { Link } from "react-router-dom";

// COMPONENTES
import { Item } from "../Item/Item";
import { LoaderSpinner } from "../LoaderSpinner/LoaderSpinner";

export const ItemList = () => {
  const [items, setItems] = useState([]);
  const apiDungeon = "https://www.dnd5eapi.co/api/monsters/";
  const [gettingData, setGettingData] = useState(true);

  useEffect(() => {
    fetch(apiDungeon)
      .then((response) => response.json())
      .then((respuesta) => setItems(respuesta.results));
    setTimeout(() => {
      setGettingData(false);
    }, 1000);
  }, []);
  return (
    <div>
      {gettingData ? (
        <LoaderSpinner />
      ) : (
        <div className="ItemList">
          {items.map((item) => {
            return (
              <Link to={`/monster/${item.index}`}>
                <Item key={item.index} data={item} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
