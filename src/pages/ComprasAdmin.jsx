import { useContext } from "react"
import { ProductosContext } from "../context/ProductosContext"
import { CarritoContext } from "../context/CarritoContext"
import { CardAdmin } from "../components/CardAdmin"




export const ComprasAdmin = () => {


  
    const { productos } = useContext( ProductosContext )
    const { agregarCompra, eliminarCompra } = useContext(CarritoContext)

    const handleAgregar = (compra) =>{
      agregarCompra(compra)
    }
    const handleQuitar = (id) =>{
      eliminarCompra(id)
    }

  return (
    <>


    {/*Aqui se mapeara la card y se mostraran los productos */}
    {productos.map(producto => (
        <CardAdmin key={producto.id} imagen={producto.image} titulo={producto.title}  precio={producto.price} 
        handleAgregar={() => handleAgregar(producto)} handleQuitar={() => handleQuitar(producto.id)}>

        </CardAdmin>
    ))}
    
    </>
  )
}
