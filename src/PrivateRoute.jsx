import { Navigate, useLocation } from "react-router-dom"

{/*Esta ruta privada es para que "ComprasAdmin" solo se pueda ingresar completando el formulario de Login o Registro*/}
export const PrivateRoute = ({children}) => {
    
    const {state} = useLocation()
  
    return state?.logged ? children : <Navigate to='/compras' />
}
