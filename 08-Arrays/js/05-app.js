//AGREGAR NUEVOS ELEMENTOS AL INICIO O AL FIN EN UN ARRAY 
//CON PUSH Y UNSHIFT (O DE FORMA IMPERATIVA)

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


//push agrega elementos al final de u arreglo
carrito.push(producto); //le agrego el objeto producto al array carrito
carrito.push(producto2);

const producto3 = {
    nombre: 'Teclado',
    precio: 50,
}

//unshift es para agregar productos al inicio de u arreglo
carrito.unshift(producto3);

console.table(carrito); // lo imprimo en forma de tabla




// const meses = ['Enero', 'Febrero', 'Marzo'];

//Agregar al fin del arreglo
// meses.push('Abril');
// meses.push('Mayo');

// console.table(meses);
