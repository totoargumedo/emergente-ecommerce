import React, { useContext, useState, useEffect } from "react";

// LIBRERIAS
import "./ItemDetailContainer.css";

// Provider
import { MonstersContext } from "../../context/MonstersContext";

// COMPONENTES
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = ({ match }) => {
  const { getSpecificMonster } = useContext(MonstersContext);
  const itemID = match.params.index;
  const [itemDetail, setItemDetail] = useState({});
  useEffect(() => {
    setItemDetail(getSpecificMonster(itemID));
  }, [getSpecificMonster, itemID]);

  return (
    <div>
      <ItemDetail data={itemDetail} />
    </div>
  );
};

export default ItemDetailContainer;
