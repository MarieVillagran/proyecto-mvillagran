import {
  Box,
  Center,
  Flex,
  Image
} from '@chakra-ui/react'

const Welcome = () => {

  
  return (
    <Flex className="welcome" bgGradient='linear( #A0AEC0, #FF0080)' >
      <Center>
        <Box boxsize="xxl" borderRadius='lg'>
          <Image p="4" src="https://res.cloudinary.com/marievillagran/image/upload/v1661624314/Proyecto/sorrentinostodos_snkcgx.jpg" />
        </Box>
      </Center>
    </Flex>
  )
}

export default Welcome;