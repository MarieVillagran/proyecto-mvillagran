import { 
  Center,
  Box,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react"


const Cart = () => {
  return (
    <>
    <Center  h='100px' color='black' bgGradient='linear( #A0AEC0, #FF0080)'>
         <h1>Productos que vas a comprar!</h1>
    </Center>
      <Box className="form-datos">
        <FormControl isRequired>
         <FormLabel>Nombre</FormLabel>
         <Input placeholder='Ingrese su Nombre' />
         <FormLabel>Apellido</FormLabel>
         <Input placeholder='Ingrese su Apellido' />
       </FormControl>
      </Box>
  </>
  )
}

export default Cart;