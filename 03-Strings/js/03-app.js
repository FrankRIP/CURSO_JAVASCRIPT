const producto = 'Monitor 20 Pulgadas ';
const precio = '30 USD ';

//el metodo concat es para unir variables o algun otro valor que se desee agregar
// console.log(producto.concat(precio));
// console.log(producto.concat('En descuento'))


//otra forma de concatenar es agregando el signo de mas
console.log(producto + "Con un precio de: " + precio);
console.log("El producto " + producto + "tiene un precio de: " + precio);

//en vez de poner con signo de mas tambien se puede con signo de dolar y backtip que es la comilla inversa
// a eso se le conoce como template string
console.log(`El articulo ${producto} tiene un precio de: $ ${precio}`); 