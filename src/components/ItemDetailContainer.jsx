import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";



const ItemDetailContainer = () => {
  const {id} = useParams();
  const [prod, setProducts] = useState([]);
    
   useEffect(() =>{
     const db = getFirestore();
     const prodCollection = collection(db, "datos");
     getDocs(prodCollection).then((snapshot)=> {
      const docs = snapshot.docs.map((doc)=> ({ id: doc.id, ...doc.data() }));     
       setProducts(docs);
     });
  },[]);
 
   
    
 const prodFilter = prod.filter((prod) => prod.id === id);  
 
  return <ItemDetail prod={prod}/>; 
}
export default ItemDetailContainer;