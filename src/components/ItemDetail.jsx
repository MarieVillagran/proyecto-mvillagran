import {
    Button,
    ButtonGroup,
    Card, 
    CardBody, 
    CardFooter,
    Center,
    Divider,
    Flex,
    Heading,
    Image,
    Stack,
    Text
 } from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({products}) => {
const {id} = useParams();
const prodFilter = products.filter((prod) => prod.id == id);  

  return (
  <>
    {prodFilter.map((prod)=>(
    <div key={prod.id}>
    <Center p="1rem" bgGradient='linear( #A0AEC0, #FF0080)'>
     <Card w='sm'>
       <CardBody>
         <Image src={prod.img} borderRadius='lg'/>
         <Stack mt='6' spacing='3'>
            <Heading size='md' textAlign="center">{prod.nombre}</Heading>
            <Text textAlign="center">{prod.desc}</Text>
            <Text textAlign="center">Stock: {prod.stock}</Text>
            <Text textAlign="center">Categoria: {prod.cat}</Text>
            <Text textAlign="center" color='blue.600' fontSize='2xl'>${prod.precio}</Text>
         </Stack>
       </CardBody>
       <Divider />
       <CardFooter className='card'>
         <Center>
          <ItemCount 
            stock={prod.stock} 
            id={prod.id}
            nombre={prod.nombre}
            precio={prod.precio}
          />
         </Center>
       </CardFooter>
     </Card>    
    </Center>
    </div>
    ))}
  </>
);
};

export default ItemDetail;