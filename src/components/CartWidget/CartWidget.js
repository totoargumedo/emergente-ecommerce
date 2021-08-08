import React from "react";

// STYLING
import "./CartWidget.css";

// LIBRERIAS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

export const CartWidget = () => {
  return (
    <FontAwesomeIcon className="headerWidget fa-2x" icon={faCartArrowDown} />
  );
};

// export default CartWidget;
