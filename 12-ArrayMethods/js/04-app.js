// filter

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let resultado;
/*
El primero parametro producto es el nombre que le indico para saber que es el objeto actual,
luego el segundo parametro es la condicion que se va a ejecutar
*/

/*
la caracteristica de .filer es que te crea un nuevo arreglo con la condicion ejecutada
*/
resultado = carrito.filter(producto => producto.precio > 400); //filtra todos los objetos con precio mayor a 400
resultado = carrito.filter(producto => producto.precio < 600); //filtra todos los objetos con precio menor a 600
resultado = carrito.filter(producto => producto.nombre !== 'Audifonos'); // le digo que me filtre todos los objetos menos lo que dicen audifonos
resultado = carrito.filter(producto => producto.nombre === 'Audifonos'); // le digo que me filtre por nombre audifonos

console.log(resultado);