import '../css/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navegacion from '../layouts/Navegacion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductosCreados from '../pages/ProductosCreados';
import CrearProductos from '../pages/CrearProducto';
function App() {
  return (
    <BrowserRouter>
       <Navegacion/>
       <Routes>
        <Route path='/' element={<ProductosCreados/>}/>
        <Route path='/crearproducto' element={<CrearProductos/>}/>
       </Routes>
    </BrowserRouter>   
  );
}

export default App;
