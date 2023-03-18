import { MinusIcon, AddIcon } from '@chakra-ui/icons';
import { 
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  Tooltip
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { CartContext } from '../context/ShopingCartContext';

export const ItemCount = ({stock, id, precio, nombre, img}) => {
  const [cart, setCart] = useContext(CartContext);  
  const [contador, setContador] = useState(1);
  
  //Suma un porducto para agregar
  const suma = () =>{setContador(contador +1)} 
  //Resta un porducto   
  const resta = () => {setContador(contador - 1)};
  //Setea el producto para que se agregue
  const onAdd = () =>{
     setCart((currItems) =>{
      const isItemExist = currItems.find((item)=> item.id === id);
      if (isItemExist){
        return currItems.map((item) =>{
          if(item.id === id){
            return {...item, cantidad: item.cantidad + contador};
            } else {
              return item;
            }
        });
      } else {
        return [ ...currItems, {id, cantidad: contador, precio, nombre, img}];
      }
     });
      console.log("Agrega al carrito" + " " + contador + " " + (nombre))
    };
    
    /* useEffect (()=> {
      setContador(parseInt(inicial))
    }) */
  return (
      <>
         <div className='footer'>
         <ButtonGroup className='botones' size="sm" color='black' borderRadius='md' bgGradient='linear(to-r, pink, purple)'
         _hover={{bgGradient: 'linear(to-r, purple, pink)',}}>
           <Divider/>

         {contador < 1 ? (<Tooltip label="minimum stock reached" placement="bottom">
            <IconButton icon={<MinusIcon />} isDisabled/></Tooltip>) : (
          <IconButton icon={<MinusIcon />} onClick={resta}/>)}
         
           <Divider/>
            <p>{contador}</p>
           <Divider/>

         {contador < stock ? (<IconButton icon={<AddIcon />} onClick={suma}/>) : (
          <Tooltip label="stock limit reached" placement="bottom">
          <IconButton icon={<AddIcon />} isDisabled/></Tooltip>)}

           <Divider/>
             <Button size="sm" onClick={()=> onAdd(contador)}>Add</Button>
           <Divider/>
         </ButtonGroup>
         </div>  
      </>
  )
}

export default ItemCount;
