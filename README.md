# Proyecto creado en React por motivos del curso 2023, FRONT-END en la TOTTI.
  - El tema seleccionado para el desenvolvimiento del proyecto, fue una pequeña tienda virtual, con una pagina que muestra algunos productos traidos de una API(FakeStore: https://fakestoreapi.com/products) que proveé los productos con sus respectivas descripciones donde tomamos como datos a mostrar (Titulo, Imagen y Precio).
  - Tambien a su vez cuenta con un Carrito de compras donde se adicioran los productos seleccionados, y en el mismo carrito se puede aumentar la cantidad de productos    o   incluso eliminar los mismos.
  - Tiene un boton para finalizar la compra, que cuando es presionado realiza un print a la pantalla emitiendo un PDF con los productos seleccionados.
  - En la barra de navegacion(NavBar), tenemos algunas opciones para navegar a travez de la pagina(Logo, Tienda, Icono Carrito, Iniciar Sesion, Registro),
    a su vez, tenemos un segundo menu, donde se adicionan nuevas funciones despues de validar el Login o Registro dentro de la pagina, donde se muestran nuevas
    ocpiones donde ya no esta(Iniciar Sesion, Registro) y automaticamente despues de validar el acceso, se muestra (Logo, Tienda, Icono Carrito, Nombre Usuario, Nuevo Producto y Cerrar sesion)  
  - Tiene un boton para finalizar la compra, que cuando es presionado realiza un print a la pantalla emitiendo un PDF con los productos seleccionados.
  - Tiene una pagina de Login, que la misma cuenta con un formulario con 3 campos(Nombre, Correo, Contraseña) y el cual funciona para iniciar sesion y pasar a la pagina  de administrador, donde podras agregar, editar y eliminar productos.
  - Tiene una pagina de Registro, que la misma cuenta con un formulario con 3 campos(Nombre, Correo, Contraseña) y el cual funciona para iniciar sesion y pasar a la pagina  de administrador, donde podras agregar, editar y eliminar productos.
  - Una vez dentro de la pagina de administrador, se mostraran las nuevas opciones ya mencionadas(Logo, Tienda, Icono Carrito, Nombre Usuario, Nuevo Producto y Cerrar sesion), Tambien se mostrara el nombre de la persona que esta logada dentro de la pagina, Adicional a esto en la Card de los productos se adicionaron 2 nuevos botones(Editar, Eliminar) cuya funcion es, como su nombre lo dice Editar y eliminar productos.
    -Nota: Al tratarse de una API externa, los productos no podran sufrir alteraciones de ningun modo, solo se mostrara en consola una conexion a la API, con las funciones PUSH, PUT, DELETE, que simularan la accion que se desea realizar.
  - Al darle Click en el boton cerrar sesion automaticamente pasa al NavBar basico con las opciones(Logo, Tienda, Icono Carrito, Iniciar Sesion, Registro)
  - Espero y les guste este pequeño proyecto.


# Guia para ver y ejecutar la tienda virtual en React

-   Proyecto creado con Vite
-   Archivo principal: `CarritoApp.jsx`
-   5 páginas: `CarritoPage.jsx` ,`ComprasPage.jsx`,`ComprasAdmin.jsx`,`LoginPage.jsx`,`RegistroPage.jsx`
-   3 contextos y proveedores: `ProductContext.jsx`, `CarritoContext.jsx`, `ComprasContext.jsx`, `ComprasProvider.jsx`, `ProductosProvider.jsx`, `CarritoProvider.jsx`
-   3 componentes especializados: `Card.jsx` , `NavBar.jsx`, `CardAdmin.jsx`
-   1 hook: `UseForm.js` 
-   1 RoutePrivate:  `PrivateRoute.js`
-   1 StyleSheet:  `card.css`
-   1 assets: `logo.png`

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado Node.js en tu máquina. Puedes verificar esto ejecutando el siguiente comando en tu terminal:

```
    node --version
```

Si Node.js no está instalado, puedes descargarlo e instalarlo desde el [sitio oficial de Node.js](https://nodejs.org/).


## Para Clonar el proyecto 

1.  Ejecuta git clone en tu terminal, con el siguiente enlace: https://github.com/EdixonT/proyecto-tienda-react.git, automanticamente se creara una carpeta con el contenido del proyecto.
    
2.  Abrimos VS Code o el compilador de tu preferencia, y arrastramos la carpeta, o tambien podemos usar la opcion dentro del VS, de abrir carpeta y seleccionamos la que se creo.
    
3.  Luego de eso, podemos hacer una prueba, instalando las dependencias, Abrimos la terminal en VS Code  y, ejecutamos el siguiente comando "npm install"

4.  Luego ejecutamos el siguiente comando "npm run dev" esto para poder ver en el navegador la app o el desarrollo que llevemos de la misma.

