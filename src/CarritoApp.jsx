import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { ComprasPage } from "./pages/ComprasPage"
import { CarritoPage } from "./pages/CarritoPage"
import { ProductosProvider } from "./context/ProductosProvider"
import { CarritoProvider } from "./context/CarritoProvider"
import './styles/card.css'
import { LoginPage } from "./pages/LoginPage"
import { RegistroPage } from "./pages/RegistroPage"
import { ComprasAdmin } from "./pages/ComprasAdmin"
import { ComprasProvider } from "./context/ComprasProvider"
import { PrivateRoute } from "./PrivateRoute"





export const CarritoApp = () => {

  return (
 /*Esta Etiqueta "Routes", es para entrelazar las distintas paginas y que se puedan conectar entre si */ 
    <ProductosProvider>
      <CarritoProvider>
       <ComprasProvider>
   
        <Routes>
            <Route path="/" element={<NavBar></NavBar>}>
              
              <Route index element={<div className="container container-products"><ComprasPage></ComprasPage></div>}>
              </Route>
              <Route path="/carrito" element={<div className="container"><CarritoPage></CarritoPage></div>}>
              </Route>
              <Route path="/login" element={<LoginPage></LoginPage>}>
              </Route>
              <Route path="/registro" element={<RegistroPage></RegistroPage>}>
              </Route>
              <Route path="/compras" element={<PrivateRoute><div className="container container-products"><ComprasAdmin></ComprasAdmin></div></PrivateRoute>}>
              </Route>
              <Route path="/*" element={<Navigate to='/' />}>
              </Route>
            </Route>
            
        
        </Routes>

        </ComprasProvider> 
      </CarritoProvider>    
    </ProductosProvider>
   
  )
}
