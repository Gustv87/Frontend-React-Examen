import { React, useEffect, useState } from 'react'
var url = "http://localhost:3000/api/producto";
import { Productos } from './Productos';
import { Prod } from './Prod';


export const Comprar = () => {


  return (
    <>
      <h1>comprar</h1>
      <div>{Productos.map((Prod) => (
        <Prod data={Prod} />
      ))}</div>
    </>
  )
}
