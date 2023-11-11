const producto = 'Monitor de 20 Pulgadas';

console.log(producto);
//replace es para remplazar palabras, este caso le digo que quiero remplazar "Pulgadas" por " " "
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

//slice para cortar
console.log(producto.slice(0,10)); //cortar desde el espacio 0 hasta el 10
// console.log(producto.slice(8)); //va al espacio 8 y desde ahi corta la cadena de texto

//alternativa a slice
console.log(producto.substring(0, 10));

//Otro ejemplo
const usuario = 'Frank';
console.log(usuario.substring(0, 1));
//o bien puede ser
console.log(usuario.charAt(0));