// find

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// con un foreach
let resultado = '';
carrito.forEach((producto, index) => { //le indico que producto es un nuevo parametro y que me busque el indice con index
    if(producto.nombre === 'Tablet'){ //si existe un string con el nombre tablet
        resultado = carrito[index] // se imprime como un nuevo arreglo el cual me arroja el nombre y precio
    }
});
console.log(resultado);


//con punto find

/*
punto find solo retorna la primer opcion que cumpla con la condicion, si existe otra despues
del primer valor que la cumpla ya no lo imprime 
*/
const resultado2 = carrito.find(producto => producto.nombre === 'Tablet');

console.log(resultado2);