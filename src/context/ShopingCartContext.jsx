import { createContext, useState } from "react";
export const CartContext = createContext(null);

export const ShopingCartProvider = ({children}) => {

  //aca le ingresamos la informacion
  const [cart, setCart] = useState([]);
  /*//Limpia el carrito
  const clearCart = () => setCart([]);
  //Devuelve verdadero o falso si el producto esta en el carrito
  const isInCart = (id) => cart.find(product => product.id === id) ? true : false;
  //Elimina un producto del carrito
  const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));
  //Agrega un producto, no acepta duplicados
 */
 return (
    <CartContext.Provider value={[cart, setCart]} /*clearCart, isInCart, removeProduct */>
    {children}
    </CartContext.Provider>
 );
};