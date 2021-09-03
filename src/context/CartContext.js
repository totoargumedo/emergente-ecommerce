import React, { useState, createContext } from "react";

// se crea contexto para Cart
export const CartContext = createContext();

// se crea componente Provider para Cart

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);

    // return del componente provider
    return(

        <CartContext.Provider value={[cart, setCart]} > {/* se pasa la prop value con el state de cart */} 
           {/* children desestructurado de props.children */}
            {/* children desestructurado de props.children */}
            {children} 
        </CartContext.Provider>
    );
};
