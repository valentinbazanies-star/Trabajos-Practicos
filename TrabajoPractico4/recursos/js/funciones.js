//Script de funciones de catalogo
function renderizarProductos(productos,contenedor){
let productosHTML =''
productos.forEach((producto)=>{
    productosHTML +=` 
                <article>
                    <h3>
                       ${producto,nombre}
                    </h3>
                    <picture>                     
                           <img src="${producto.imagen}" alt="${producto,nombre}">                      
                    </picture>
                    <p>
                     ${producto,descripcion}
                    </p>
                    <ul>
                        <li>Presentacion ${producto.presentacion[0]}</li>
                        <li>Precio $ ${productosHTML.precio}</li>
                    </ul>
                </article>`  
          
})


contenedor.innerHTML = productosHTML
}

export default renderizarProductos

//Fin de script