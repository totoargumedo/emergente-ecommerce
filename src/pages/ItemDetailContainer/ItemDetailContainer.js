import React, { useState, useEffect } from "react";

// LIBRERIAS
import "./ItemDetailContainer.css";
import axios from "axios";

// COMPONENTES
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";

export const ItemDetailContainer = ({ match, url }) => {
  const apiDungeon = "https://www.dnd5eapi.co/api/monsters/";
  const itemID = match.params.index;
  const [itemDetail, setItemDetail] = useState({});

  useEffect(() => {
    axios
      .get(apiDungeon + itemID)
      .then((respuesta) => setItemDetail(respuesta.data));
  }, [itemID]);

  return (
    <div>
      <ItemDetail data={itemDetail} />
    </div>
  );
};
