import React from 'react'
import { Badge } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"
import '../styles/card.css'
import logo from "../assets/logo.png"






export const NavBar = () => {

    const { listaCompras } = useContext(CarritoContext)
    const {state} = useLocation()
    const navigate = useNavigate()

    const onLogout = () =>{
        navigate('/index', {
            replace: true,
        })
    }
    const newProducto = () =>{
        fetch('https://fakestoreapi.com/products',{
            method:"POST",
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

    return (
        <>
            <header class="header" >
                <NavLink to='index'><img class="header__logo" src={logo} alt="" /></NavLink>
            
           
                {   
                    state?.logged ? (
                        <nav className='navegacion'>
                        <div>
                        <NavLink to='index' >TIENDA</NavLink>
                        </div>
                        
                        <div>
                        <NavLink to='/carrito'>
                            <Badge  badgeContent={listaCompras.length} color="secondary" size="large">
                                <ShoppingCart  color="action" />
                            </Badge>
                        </NavLink>
                        </div>

                        <div className="user">
                            <span>{state?.name}</span>
                            <button className='btn-producto'  onClick={newProducto}>Nuevo Producto</button>
                            <button className='btn-logout'onClick={onLogout}>Cerrar Sesion</button>
                        </div>
                        </nav>
                    )
                    :
                    (   
                        <nav className='navegacion'>
                        <NavLink to='index' class="navegacion__enlace navegacion__enlace--activo">TIENDA</NavLink>

                        <NavLink to='/carrito'>
                            <Badge className="navegacion__badge" badgeContent={listaCompras.length} color="secondary">
                                <ShoppingCart color="action" />
                            </Badge>
                        </NavLink>
        
                        <NavLink to='/login'>
                           INICIAR SESIÓN
                        </NavLink>
        
                        <NavLink to='/registro'>
                            REGISTRO
                        </NavLink>       
                        </nav>  
                    )
                }
            </header>
            <Outlet></Outlet>

        </>
    )
}
