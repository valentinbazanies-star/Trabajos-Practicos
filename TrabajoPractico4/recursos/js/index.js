//Java Script de Catalogo
import productosDetailing from "./productos.js";
import renderizarProductos from "./funciones.js";

const contenedorProductos = document.getElementById("contenedor-productos");
renderizarProductos(productosDetailing, contenedorProductos);
//Fin de catalogo