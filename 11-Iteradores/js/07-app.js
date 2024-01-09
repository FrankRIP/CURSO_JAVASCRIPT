// For of

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];

const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
]

for( let pendiente of pendientes ){ //es como definir un alias del arreglo, donde 'pendiente es el alias de 'pendientes
    console.log(pendiente);
}

for(let producto of carrito){ // producto es el alias de carrito
    console.log(producto.nombre);
}