import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>  
        <Route exact path="/" element={<Welcome/>}/>
        <Route exact path="/catalogo" element={<ItemListContainer/>}/>
        <Route exact path="/categoria/:cat" element={<ItemListContainer/>}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
      </Routes>  
    </BrowserRouter>  
    
  ); 
}

export default App;
