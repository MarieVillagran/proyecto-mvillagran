import { useContext } from 'react'
import { Button } from '@chakra-ui/react'
import { CartContext } from '../context/ShopingCartContext';

const CartWidget = () => {
  const [cart, setCart] = useContext(CartContext);
  const cantidad = cart.reduce((acc, curr)=> {
    return acc + curr.cantidad;
  }, 0);
  
  return(
    <>
      <div className="carrito">
         <Button size="lg" color='black' borderRadius='md' bgGradient='linear(to-r, pink, purple)'
          _hover={{bgGradient: 'linear(to-r, purple, pink)',}}>
           <span className="material-symbols-outlined">shopping_cart</span>
           <span>{cantidad}</span>
         </Button>
      </div>
    </>
  );
};

export default CartWidget;