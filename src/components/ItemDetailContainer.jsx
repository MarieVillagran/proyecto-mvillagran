import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import data  from "../data.json";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
  const {id} = useParams();
  //const [products, setProducts] = useState([]);
    
   /* useEffect(() =>{
     async function fetchData() {
       try {
        const response = await fetch('src/data.json');
        const products = await response.json();
        setProducts(products);
       } catch (error) {
       }
     }
     fetchData(); 
  }, []); */ 
    
  const prodFilter = data.filter((prod) => prod.id == id);  

  return <ItemDetail products={data}/>; 
}
export default ItemDetailContainer;