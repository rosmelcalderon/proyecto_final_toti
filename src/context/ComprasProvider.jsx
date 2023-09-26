import { useEffect, useState } from "react"
import { ComprasContext } from "./ComprasContext"

export const ComprasProvider = ({ children }) => {
    
    const [productos, setProductos] = useState([])
    

    const fetchProductos = async() => {
          const response = await fetch('https://fakestoreapi.com/products')
          const data = await response.json()
          setProductos(data)
    
    
          
  }

  useEffect( () => {
      fetchProductos()
  }, [])

 
    return (
        
    <ComprasContext.Provider value={{productos}}>
        {children}
    </ComprasContext.Provider>
  )
}

