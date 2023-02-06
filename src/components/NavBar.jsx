import React from 'react';
import CartWidget from './CartWidget';
import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Flex,
  Container,
  Spacer,
  Button,
  Avatar,
} from '@chakra-ui/react'


//Barra de Navegacion
const NavBar = () => {
  return (
  <>
  <Container maxW="100%" bg="teal" textColor="black" >
  <Flex alignItems="center" gap="2" p="2">
  <Box p="4" w='300px' h='100' bg='blue.200'> 
  <Avatar size="lg"  src='https://res.cloudinary.com/marievillagran/image/upload/v1661629519/Proyecto/logo_uferhq.png' />
  </Box> 
  <Spacer/>
  <Box p="10" w='300px' h='100' bg='blue.200' textAlign="center">
    <h1>Pastas Artesanales</h1>   
  </Box>
  <Spacer/>
  <Box p="8" w='300px' h='100' bg='blue.200' textAlign="center">
  <Menu>
  <MenuButton as={Button} size="lg" colorScheme="teal" variant="outline" rigthIcon={<ChevronDownIcon />}>
    Categorias
  </MenuButton >
    <MenuList className='menu' >
       <MenuItem>Variedades</MenuItem>
       <MenuItem>Promociones</MenuItem>
       <MenuItem>Sucursales</MenuItem>
       <MenuItem>Comparta su experiencia</MenuItem>
    </MenuList>
  </Menu>
</Box>
<Spacer/>
<Box p="8" w='300px' h='100' bg='blue.200' textAlign="center">
   <CartWidget/>
</Box> 
</Flex>
</Container>
  </>
  );
};

export default NavBar;
