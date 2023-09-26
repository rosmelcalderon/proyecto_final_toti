import { useState } from "react"
import '../styles/card.css'







export const CardAdmin = ({ imagen, titulo, descripcion, precio, handleAgregar, hanldeQuitar }) => {
  
  const [added, setAdded] = useState(false)
  const clickAgregar = () => {
    handleAgregar()
    setAdded(true)
  }
  const clickEliminar = () => {
    hanldeQuitar()
    setAdded(false)
  }
  

  const actualizarProductos = async(id) =>{
     await fetch('https://fakestoreapi.com/products/7',{
      method:"PUT",
      body:JSON.stringify(
          {
              title: 'test product',
              price: 13.5,
              description: 'lorem ipsum set',
              image: 'https://i.pravatar.cc',
              category: 'electronic'
          }
      )
  })
  .then(res=>{
    if(res.ok){
      console.warn(res)
    }
    
  })
  }

  const eliminarProductos = async(title, price) =>{
    await fetch('https://fakestoreapi.com/products/6',title, price,{
          method:"DELETE"

      })
      .then(res=>{
        if(res.ok){
          console.warn(res)
        }
        
      })


  }
 


  return (
    
    <>
      
      <div className="tarjeta container ">

        <a className="tarjeta-imagen" href="">
          <img src={imagen} alt={titulo} className="tarjeta-imagen" />
        </a>

        <h3 className="tarjeta-titulo">{titulo}</h3>
        <p className="tarjeta-descripcion">{descripcion}</p>
        <h4 className="tarjeta-precio">${precio}</h4>

        <div className="tarjeta-conenido-admin">
          {/*Este condicional es para saber si hay elementos para quitar o agregar al carrito, dependiendo lo que haya, activara un boton o ambos */}
          {
            added ? <button type="button" className="boton-eliminar-admin" >AGREGADO</button> :

              <button className="boton-agregar" onClick={clickAgregar}>AGREGAR</button>
          }
          <button className="boton-editar" onClick={actualizarProductos} >Editar</button>
          <button className="boton-eliminar-admin"  onClick={ eliminarProductos}>Eliminar</button>
        </div>

      </div>
    </>
  )
}
