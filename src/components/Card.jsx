import { useState } from "react"
import '../styles/card.css'


export const Card = ({ imagen, titulo, descripcion, precio, handleAgregar, hanldeQuitar}) => {

    const [added, setAdded] = useState(false)
    const clickAgregar = () =>{
      handleAgregar()
      setAdded(true)
    }
    const clickEliminar = () =>{
      hanldeQuitar()
      setAdded(false)
    }


  return (

    <div className="tarjeta container ">
      
        <a className="tarjeta-imagen" href=""> 
        <img src={imagen} alt={titulo} className="tarjeta-imagen" />
        </a> 
        <div className="tarjeta-conenido">
        <h3 className="tarjeta-titulo">{titulo}</h3>
        <p className="tarjeta-descripcion">{descripcion}</p>
        <h4 className="tarjeta-precio">${precio}</h4>
   {/*Este condicional es para saber si hay elementos para quitar o agregar al carrito, dependiendo lo que haya, activara un boton o ambos */}
        {
            added ? <button type="button" className="boton-eliminar" onClick={clickEliminar}>AGREGADO</button> :

            <button type="button" className="boton-agregar" onClick={clickAgregar}>AGREGAR</button>
        }

        </div>
        
    </div>
  )
}
