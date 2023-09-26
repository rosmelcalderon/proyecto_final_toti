import { useContext } from "react"
import { Card } from "../components/Card"
import { ProductosContext } from "../context/ProductosContext"
import { CarritoContext } from "../context/CarritoContext"



export const ComprasPage = () => {

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
        <Card key={producto.id} imagen={producto.image} titulo={producto.title}  precio={producto.price} 
        handleAgregar={() => handleAgregar(producto)} handleQuitar={() => handleQuitar(producto.id)}>

        </Card>
    ))}
    
    </>
  )
}
