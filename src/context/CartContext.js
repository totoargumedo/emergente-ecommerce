import React, { useState, createContext } from "react";

// se crea contexto para Cart
export const CartContext = createContext();

// se crea componente Provider para Cart

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // funcion para comprobar si el elemento ya existe
  const isInCart = (index) => cart.some((item) => item.index === index);

  // total de exp en carrito
  const [totalExp, setTotalExp] = useState(0);
  const cartTotalExpCalculator = () => {
    var cartTotalExp = 0;
    cart.forEach((monster) => {
      cartTotalExp = cartTotalExp + monster.xp * monster.quantity;
    });
    setTotalExp(cartTotalExp);
  };

  // funcion sumar si existe o agregar si no lo esta
  const addToCart = (item, quantity) => {
    if (isInCart(item.index)) {
      const newCart = cart.map((e) => {
        if (e.index === item.index) {
          return { ...e, quantity: e.quantity + quantity };
        } else {
          return e;
        }
      });
      setCart(newCart);
    } else {
      setCart((prev) => [...prev, { ...item, quantity }]);
    }
  };

  // funcion eliminar item
  const removeItem = (index) => {
    setCart(
      cart.filter((e) => {
        return (e.item.index = !index);
      })
    );
  };

  // funcion borrar cart
  const clearCart = () => setCart([]);

  // return del componente provider
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clearCart,
        cartTotalExpCalculator,
        totalExp,
      }}
    >
      {" "}
      {/* se pasa la prop value con el state de cart */}
      {/* children desestructurado de props.children */}
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
