import React, { useState, useEffect, useContext } from "react";

// STYLING
import "./CartWidget.css";

// LIBRERIAS
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
// PROVIDER
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const [cartEmpty, setCartEmpty] = useState(false);

  useEffect(() => {
    if (cartTotal !== 0) {
      setCartEmpty(true);
    } else {
      setCartEmpty(false);
    }
  }, []);

  const cartTotal = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  return (
    <Link to="/cart">
      {cartEmpty && (
        <div className="headerWidget">
          {/* <FontAwesomeIcon icon={faCartArrowDown} size="2x" />; */}
          <Icon name="cart" size="large" />
          <p>{cartTotal}</p>
        </div>
      )}
    </Link>
  );
};

// export default CartWidget;
