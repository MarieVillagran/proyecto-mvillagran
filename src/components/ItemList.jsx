import Item from "./Item";

const ItemList = ({prod}) => {
    //console.log(data);
    //console.log(prod);

return (
<>
  <div w="container.sm" className="main-catalogue">
  {prod?.map((prod)=>(
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