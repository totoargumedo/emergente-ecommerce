import React, { useContext } from "react";

// LIBRERIAS
import "./ItemList.css";
import { Link } from "react-router-dom";

// COMPONENTES
import Item from "../Item/Item";

// PROVIDER
import { MonstersContext } from "../../context/MonstersContext";

const ItemList = () => {
  // datos desde la coleccion monsters de firestore
  const { monsters } = useContext(MonstersContext);

  return (
    <div>
      <div className="ItemList">
        {monsters.map((monster) => {
          return (
            <Link to={`/${monster.type}/${monster.index}`}>
              <Item key={monster.index} data={monster} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
