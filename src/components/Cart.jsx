import {
  Center,
  Button,
  Text,
  TableContainer,
  Thead,
  Th,
  Tr,
  Td,
  Tfoot,
  Tbody,
  Table
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { CartContext } from "../context/ShopingCartContext";
import SendOrder from "./SendOrder";

const Cart = () => {  
  const [cart, setCart] = useContext(CartContext);
  const [userNombre, setUserNombre] = useState("")
  const [userMail, setUserMail] = useState("")
  const [userCel, setUserCel] = useState("")
   
  const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));
  return (
    <>
      <Center h="100px" color="black" bgGradient="linear( #A0AEC0, #FF0080)">
        <Text as="b">Productos Seleccionados</Text>
      </Center>

      {cart.map((item) => {
        return (
          <TableContainer key={item.id} className="main-catalogo">
              <Center variant="striped" bg="white">   
                <Table>
                  <Thead>
                  <Tr>
                    <Th>Producto</Th>
                    <Th>Cantidad</Th>
                    <Th isNumeric>Precio</Th>
                    <Th isNumeric>SubTotal</Th>
                  </Tr>
                  </Thead>
                  <Tbody>
                  <Tr>
                    <Td>{item.nombre}</Td>
                    <Td>{item.cantidad}</Td>
                    <Td isNumeric>${item.precio}</Td>
                    <Td isNumeric>${item.precio}</Td>
                    <Td><Button bg="red" onClick={ removeProduct }
                >Eliminar</Button></Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th isNumeric>Total</Th>
                  </Tr>
                </Tfoot>
                </Table>
              </Center>
            </TableContainer>
        );
      })}
      <SendOrder />
    </>
  );
};

export default Cart;
