//Evalua el codigo y no permite malas practicas
"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

Object.seal( producto ); // Es decirle que selle el objeto y no permita eliminarle propiedades pero si modificarlas
producto.disponible = false;
// producto.imagen = 'imagen.jpg';

console.log(producto);


console.log(Object.isSealed(producto)); //Esto es para ver si un objeto esta sellado
