import ItemList from './ItemList'
import data from "../data.json"
import { useEffect, useState } from 'react';
import { Center } from '@chakra-ui/react'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
   const { cat } = useParams();  
  
   console.log(cat)
   const [products, setProducts] = useState([])
  
    //opcion con useEffect
   useEffect (()=>{
      async function fetchData() {
        try {
         const response = await fetch('../data.json');
         const products = await response.json();
         setProducts(products);
        } 
        catch (error) {
        }
        }
     fetchData();  
    },[]); 
   
  const catFilter = data.filter((prod) => prod.cat === cat);
  console.log(catFilter)
  
  return (
      <div>
      <Center  h='100px' color='black' bgGradient='linear( #A0AEC0, #FF0080)'>
         <h1>Productos para elegir!</h1>
      </Center>  
      {cat ? <ItemList products={catFilter} /> : <ItemList products={data} />}      
      </div>
  )
}

export default ItemListContainer;