import React, { createContext } from 'react'
import { Productos } from './Productos';

export const TiendaContext = createContext(null);

const getDefaultCart = () =>{
    let cart ={};
    for (let i = 1; i<Productos.length+1; i++){
        cart[i]=0;
    }
    return cart;
}

export const ComprarContext = (props) => {
    const [cartItems, setCartitems]= useState(getDefaultCart());

    const addToCart =(id_producto)=>{
        setCartitems((prev)=>({...prev,[id_producto]: prev[ide_producto]+1}))
    }
    const removeFromCart =(id_producto)=>{
        setCartitems((prev)=>({...prev,[id_producto]: prev[ide_producto]-1}))
    }

    const contextValue = {cartItems, addToCart,removeFromCart}
    return <TiendaContext.Provider value={contextValue}>{props.children}</TiendaContext.Provider>;
};
