import {
    Button,
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
import { Link } from 'react-router-dom';

const Item = ({id, nombre, precio, desc, stock, img, cat}) => {
//console.log(id)
return (
<>
<Flex>  
  <div key={id}>  
    <Card w='sm' m="2" pt="2" mb="2" mt="2" align="center" variant="filled">
      <CardBody>
        <Image src={img} alt='Green double couch with wooden legs' borderRadius='lg'/>
        <Stack mt='6' spacing='3'>
          <Heading size='md' textAlign="center">{nombre}</Heading>
          <Text textAlign="center">Categoria: {cat}</Text>
          <Text color='blue.600' fontSize='2xl' textAlign="center">Stock: {stock}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Center>
          <Button variant='solid' bgGradient='linear( #A0AEC0, #FF0080)' >
            <Link to= {`/item/${id}`}>Detalles</Link> 
          </Button>
        </Center>
      </CardFooter>
    </Card>
  </div>
</Flex>
</>
)
}

export default Item;