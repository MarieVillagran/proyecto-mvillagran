import ItemList from './ItemList'
import { useEffect, useState } from 'react';
import { 
   Center,
   Text
 } from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
import {collection, getDocs, getFirestore} from "firebase/firestore";

const ItemListContainer = () => {
   const [prod, setProducts] = useState([]);
   const { cat } = useParams();  
  
   useEffect (() => {
      const db = getFirestore();
      const prodCollection = collection(db, "datos");
      getDocs(prodCollection).then((snapshot) =>{
         const docs = snapshot.docs.map((doc)=> ({ id: doc.id, ...doc.data() }));
         setProducts(docs)
      })
         
      
   },[]); 
   
  const catFilter = prod.filter((prod) => prod.cat === cat);
  //console.log(catFilter)
  
  return (
      <div>
      <Center  h='100px' color='black' bgGradient='linear( #A0AEC0, #FF0080)'>
         <Text as="b">Productos para elegir!</Text>
      </Center>  
      {cat ? <ItemList prod={catFilter} /> : <ItemList prod={prod} />}      
      </div>
  )
}

export default ItemListContainer;