import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./NavBar/NavBar";
import { Intro } from "./Intro/Intro";
import { ProductsList } from "./ProductList/ProductList";
import { Product } from "./Product/Product";
import { Footer } from "./Footer/footer";

function App() {
  const listaProductos = [
    {urlImg: 'https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=1600', 
    precio: 12000, titulo: 'Manicure'},
    {urlImg: 'https://images.pexels.com/photos/2040189/pexels-photo-2040189.jpeg?auto=compress&cs=tinysrgb&w=1600', 
    precio: 18000, titulo: 'Corte basico hombre'},
    {urlImg: 'https://images.pexels.com/photos/3993312/pexels-photo-3993312.jpeg?auto=compress&cs=tinysrgb&w=1600', 
    precio: 80000, titulo: 'Tintura'},
  ]
  return (
    <>
      <NavBar />
      <Intro />
      <ProductsList>
        {listaProductos.map(producto => (
          <Product urlImg={producto.urlImg} precio={producto.precio} titulo={producto.titulo}/>
        )
        )}
      </ProductsList>
      <Footer/>
    </>
  );
}

export default App;
