// .reduce

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//con un forEach
let total = 0;
/*
con el forEach recorro el arreglo con un nuevo paramtro llamado producto el cual va
a ser igual o mayor al total que es un nuevo parametro que le indico y va recorriendo los valores
en produco.precio y a la misma vez se va sumando y la imprimo con el console.log
*/ 
carrito.forEach(producto => total += producto.precio);
console.log(total);

//con un reduce
/*
con este array method se le pasan dos valores al metodo, uno que es el valor anterior al primero
elemento del arreglo o sea que antes de ser "nombre: 'Monitor 27 Pulgadas', precio: 500" este comienza
en 0 y empieza a sumar los valores y el segundo parametro es el valor actual.
como el total va a iniciar en cero, ya solo pongo "total + producto.precio" y el metodo sabe que le
estoy sumando, ya solo le paso el cero luego de la coma para indicarle que ese sera el valor inicial
 */
let resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado);