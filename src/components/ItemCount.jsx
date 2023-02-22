import { MinusIcon, AddIcon } from '@chakra-ui/icons';
import { 
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  Tooltip
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export const ItemCount = ({stock, id, precio, nombre}) => {
      
  const [contador, setContador] = useState(1)  
  
  const suma = () =>{setContador(contador +1)}    
  const resta = () => {setContador(contador - 1)};
  const onAdd = () =>{
      console.log("Agrega al carrito")
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
             <Button size="sm" onClick={()=> onAdd()}>Add</Button>
           <Divider/>
         </ButtonGroup>
         </div>  
      </>
  )
}

export default ItemCount;
