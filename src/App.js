import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./NavBar/NavBar";
import { Intro } from "./Intro/Intro";
import { ProductsList } from "./ProductList/ProductList";
import { Product } from "./Product/Product";
import { Footer } from "./Footer/Footer";

function App() {
  const listaProductos = [
    {urlImg: 'https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=1600', 
    precio: 12000, titulo: 'Manicure'},
    {urlImg: 'https://images.pexels.com/photos/2040189/pexels-photo-2040189.jpeg?auto=compress&cs=tinysrgb&w=1600', 
    precio: 18000, titulo: 'Corte basico hombre'},
    {urlImg: 'https://images.pexels.com/photos/3993312/pexels-photo-3993312.jpeg?auto=compress&cs=tinysrgb&w=1600', 
    precio: 80000, titulo: 'Tintura'},
    {urlImg: 'https://images.pexels.com/photos/704815/pexels-photo-704815.jpeg?auto=compress&cs=tinysrgb&w=1600', 
    precio: 80000, titulo: 'Manicure verde'},
  ];
  //Estado de el valor a buscar
  const [searchValue, setSearchValue] = React.useState('');

  //Estado para guardar los productos añadidos al carrito
  const [contador, setContador] = React.useState(0);

  const filteredList = listaProductos.filter(producto => {
    let titulo = producto.titulo.toLowerCase();
    let textBusqueda = searchValue.toLowerCase();
    return titulo.includes(textBusqueda);
});
  console.log(filteredList);
  return (
    <>
      <NavBar searchValue={searchValue} setSearchValue={setSearchValue} contador= {contador}/>
      <Intro />
      <ProductsList>
        {filteredList.map(producto => (
          <Product urlImg={producto.urlImg} precio={producto.precio} titulo={producto.titulo}
          contador={contador} setContador={setContador}/>
        )
        )}
      </ProductsList>
      <Footer/>
    </>
  );
}

export default App;
