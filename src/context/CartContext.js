import React, { useState, createContext } from "react";

// se crea contexto para Cart
export const CartContext = createContext();

// se crea componente Provider para Cart

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);
    // funcion para comprobar si el elemento ya existe
    const isInCart = (index) => cart.some((item) => item.index === index)

    // funcion sumar si existe o agregar si no lo esta
    const addToCart = (item, quantity) => {
        if (isInCart(item.index)){
            const newCart = cart.map((e) => {
                if(e.index === item.index){
                    return{...e, quantity: e.quantity + quantity};
                } else {
                    return e;
                }
            })
            setCart(newCart);
        } else{
            setCart((prev)=> [...prev, {...item, quantity}]);
        }
    };

    // funcion eliminar item
    const removeItem = (index) =>{
        setCart(cart.filter((e)=>{
            return(e.item.index =! index)
            
        }))
    }
    
    // funcion borrar cart
    const clearCart = () => setCart([]);

    // return del componente provider
    return(

        <CartContext.Provider value={{cart, addToCart, removeItem, clearCart}} > {/* se pasa la prop value con el state de cart */} 
            {/* children desestructurado de props.children */}
            {children} 
        </CartContext.Provider>
    );
};
