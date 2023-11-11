//Evalua el codigo y no permite malas practicas
"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

Object.freeze( producto ); // Es decirle que congele el objeto y no permita hacerle mas modificaciones

// producto.disponible = false;
// producto.imagen = 'imagen.jpg';

console.log(producto);

console.log(Object.isFrozen(producto)); // Es para saber si el objeto esta congelado