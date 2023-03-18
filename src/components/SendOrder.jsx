import {
  Container,
  Center,
  Heading,
  FormControl,
  Input,
  FormLabel,
  Button,
  Text,
  Spinner
} from 'react';
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useState } from "react";
import { CartContext } from '../context/ShopingCartContext';
import { useContext } from 'react';

const SendOrder = () => {
    const [orderId, setOrderId] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cart, setCart] = useContext(CartContext);
    const [cel, setCel] = useState("")

  const db = getFirestore();

   const handleSubmit = (e) =>{
     e.preventDefault();
     if(name === "" || email === ""){
      alert("No pueden existir campos vacios");
     }else{
      //Creo la colleccion Order
      addDoc(orderCollection, order).then(({ id }) => setOrderId(id));
   };
   setEmail("");
  }; 

   const order = {
   name: {},
   email:{},
   orderId: {}
   };

   const orderCollection = collection(db, "order");

   return(
      <>
      <Center>
        <Heading>Datos de la Compra</Heading>
      </Center>
      <Container>
        <FormControl>
          <form onSubmit={handleSubmit}>
            <FormLabel>Nombre y Apellido</FormLabel>
            <Input size="lg" onChange={(e) => setName(e.target.value)} />
            <FormLabel>Email</FormLabel>
            <Input size="lg" onChange={(e) => setEmail(e.target.value)} />
            <FormLabel>Celular</FormLabel>
            <Input size="lg" onChange={(e) => setCel(e.target.value)} />
            <Button colorScheme="blue" as="submit" m={5}>
              Enviando Info
            </Button>
            {/* <Spinner
          thickness='3px'
          speed='0.60s'
          emptyColor='#A0AEC0'
          color='#FF0080'
          size='xl'
            /> */}
          </form>
        </FormControl>
      </Container>
      <Center>
        <Text as="b" m={3} fontSize="xl">Order ID:{""}</Text>
        <Text as="mark" fontSize="2xl">{orderId}</Text>
      </Center>
      </>
   );
};
   
export default SendOrder; 