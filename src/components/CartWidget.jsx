import React from 'react'

import { Button } from '@chakra-ui/react'

const CartWidget = () => {
  return(
    <>
      <div className="carrito">
         <Button size="lg" color='black' borderRadius='md' bgGradient='linear(to-r, pink, purple)'
          _hover={{bgGradient: 'linear(to-r, purple, pink)',}}>
           <span className="material-symbols-outlined">shopping_cart</span>
           <span>5</span>
         </Button>
      </div>
    </>
  );
};

export default CartWidget;