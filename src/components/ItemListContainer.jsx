import { Box } from '@chakra-ui/react'
import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <Box p="20" textAlign="center">{greeting}</Box>
  )
}

export default ItemListContainer