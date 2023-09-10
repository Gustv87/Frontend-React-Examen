import React from 'react'
import { ComprarContext } from './ComprarContext';

export const Prod = (props) => {
 const {id_producto, nombre, precio, foto}= props.data;
 return (
 <div>
    <img src ={foto}/>
    <div>
        <p>{nombre}</p>
        <p>${precio}</p>
    </div>
    <button>Agregar al carrito</button>
 </div>
 );
};
