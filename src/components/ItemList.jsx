import Item from "./Item";

const ItemList = ({products}) => {
    //console.log(data);
    //console.log(cat);

return (
<>
  <div w="container.sm" className="main-catalogue">
  {products?.map((prod)=>(
      <Item
        key={prod.id}
        id={prod.id}  
        nombre={prod.nombre}
        desc={prod.desc}
        precio={prod.precio}
        stock={prod.stock}
        img={prod.img}
        cat={prod.cat}          
      />
    ))}
  </div>
</>
);
};

export default ItemList;