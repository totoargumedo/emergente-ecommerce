import React from "react";

// STYLING
import "./CartWidget.css";

// LIBRERIAS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

export const CartWidget = () => {
  return (
    <div className="headerWidget">
      <FontAwesomeIcon icon={faCartArrowDown} />;
    </div>
  );
};

// export default CartWidget;
