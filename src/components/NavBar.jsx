import React from 'react';
import CartWidget from './CartWidget';
import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Spacer,
  Button,
  Avatar,
  Center
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>  
      <div>
        <Center className='navbar' bg="gray.300">
           <Spacer/>
              <Box>
                <Link to={"/"}>
                <Avatar p="2" size='xl' src='https://res.cloudinary.com/marievillagran/image/upload/v1663454544/Proyecto/logoinsta_kljs88.png'/>
                </Link>
              </Box>
           <Spacer/>
              <Box>  
                <Menu>
                <Link to={"/catalogo"}>
                <MenuButton as={Button} size="lg" color='black' borderRadius='md'
                bgGradient='linear(to-r, pink, purple)' _hover={{bgGradient: 'linear(to-r, purple, pink)',}}>
                Catalogo
                </MenuButton> 
                </Link>
                </Menu>  
              </Box>
           <Spacer/>
              <Box>  
                <Menu>
                <MenuButton as={Button} size="lg" color='black' borderRadius='md'
                bgGradient='linear(to-r, pink, purple)' _hover={{bgGradient: 'linear(to-r, purple, pink)',}} rightIcon={<ChevronDownIcon />}>
                Categoria 
                </MenuButton >
                <MenuList className='menu' bgGradient='linear(to-r, pink, purple)'>
                <Link to={`/categoria/${"Variedad"}`}>
                <MenuItem bgGradient='linear(to-r, pink, purple)'>Variedades</MenuItem>
                </Link>
                <Link to={`/categoria/${"Promo"}`}>
                <MenuItem bgGradient='linear(to-r, pink, purple)'>Promociones</MenuItem>
                </Link>
                </MenuList>
                </Menu>
              </Box>
           <Spacer/>
              <Box>
                <Link to={"/cart"}>
                <CartWidget/>
                </Link>
              </Box> 
           <Spacer/>
        </Center>
      </div>
    </>
  );
};

export default NavBar;
