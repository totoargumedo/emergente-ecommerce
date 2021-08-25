import React, { useState, useEffect } from "react";

// LIBRERIAS
import "./ItemDetailContainer.css";

// COMPONENTES
import { ItemDetail } from "../ItemDetail/ItemDetail";
import axios from "axios";

export const ItemDetailContainer = ({ url }) => {
  const [itemDetail, setItemDetail] = useState({});
  useEffect(() => {
    axios.get(url).then((respuesta) => setItemDetail(respuesta.data));
  }, []);

  return (
    <div>
      <ItemDetail data={itemDetail} />
    </div>
  );
};
