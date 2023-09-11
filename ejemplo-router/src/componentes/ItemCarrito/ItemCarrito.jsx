import React, { useContext } from "react";
import ContextCarrito from "../../src/componentes/CarroContext";
import styles from "../../componentes/ItemCarrito"

export const ItemCart = ({ item }) => {
  /* Traemos del context las funciones para agregar y sacar productos del carrito */
 const { editItemToCart } = useContext(ContextCarrito);

  /* Desestructuramos el item para sacar solo la id */
  const { amount } = item;

  return (
    <div className={styles.cartItem}>
     <img src={item.img} alt={item.name} />
      <div className={styles.dataContainer}>
        <div className={styles.left}>
         <p>{item.name}</p>
          <div className={styles.buttons}>
            <button onClick={() => editItemToCart(item._i, amount)}>
              AGREGAR
            </button>
            <button onClick={() => editItemToCart(item._id,  amount)}>
              SACAR
           </button>
        </div>
        </div>
        <div className={styles.right}>
          <div>{item.amount}</div>
          <p>Total: ${item.amount * item.price}</p>
     </div>
    </div>
</div>
 );
};
