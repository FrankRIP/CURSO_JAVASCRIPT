// ForEach y .map

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];

/* 
El forEach esta pensado para recorrer arreglos, por lo tanto al poner tambien
la coma y declararle un nombre al segundo parametro este imprimira el valor del indice del arreglo
 */
pendientes.forEach((pendiente, indice) =>{ 
    console.log(`${indice} : ${pendiente}`); // aqui me imprimira el indice y el valor que tiene
})

const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
]

const nuevoArreglo = carrito.forEach(producto => producto.nombre) //me imprime el arreglo tal cual

const nuevoArreglo2 = carrito.map(producto => producto.nombre) //me imprime un arreglo nuevo

console.log(nuevoArreglo);
console.log(nuevoArreglo2);