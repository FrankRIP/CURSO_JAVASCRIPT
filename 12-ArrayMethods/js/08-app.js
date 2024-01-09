// spread operator

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

/*
//para modificar el arreglo original es con push
meses.push('Agosto');
console.log(meses);
*/

//spread operator
//de esta manera no modificamos el arreglo original
const meses2 = [...meses, 'Agosto']; 
console.log(meses2);

//para agregar mas objetos al arreglo
const producto = {nombre: 'Disco Duro', precio: 300};
const carrito2 = [...carrito, producto]; //puede cambiar el orden del spread operator, por ejemplo puedo
//poner producto al inicio y se agrega al inicio del arreglo
console.log(carrito2);