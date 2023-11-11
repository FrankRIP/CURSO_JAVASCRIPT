//ELIMINAR ELEMENTOS CON SPLICE (DE FORMA IMPERATIVA)

const carrito =[];

//Definir un producto
const producto = {  //creo un objeto con en nombre y precio de un producto
    nombre: "Monitor de 32 pulgadas",
    precio: 400,
}

const producto2 = {
    nombre: 'Celular',
    precio: 800,
}

const producto4 = {
    nombre: 'Teclado 2',
    precio: 500,
}

//push agrega elementos al final de u arreglo
carrito.push(producto2); //le agrego el objeto producto al array carrito
carrito.push(producto);
carrito.push(producto4);

const producto3 = {
    nombre: 'Teclado',
    precio: 50,
}



//unshift es para agregar productos al inicio de u arreglo
carrito.unshift(producto3);
console.table(carrito); // lo imprimo en forma de tabla

// //Eliminar ultimo elemento del arreglo
// carrito.pop();
// console.table(carrito);

// //Eliminar del inicio del arreglo
// carrito.shift();
// console.table(carrito);

carrito.splice(1, 1); //con splice se elimina dependiendo los parametros que yo deseo eliminar
//el primero parametro es la posicion del elemento que quiero eliminar
//y el segundo es cuantos elementos quiero eliminar


// si quiero eliminar de la misma manera que pop y shift seria asi
//carrito.splice(0, 1); //asi elimino al inicio del metodo
//carrito.splice(3, 1); //asi elimino al final del metodo
console.table(carrito);