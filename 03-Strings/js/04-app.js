const producto = '          Monitor de 20 Pulgadas          ';

console.log(producto);
console.log(producto.length);

//eliminar espacios al inicio
console.log( producto.trimStart());
//eliminar espacios al final
console.log( producto.trimEnd() );

//tambien puedo concatenar metodos
console.log( producto.trimStart().trimEnd() );

//puedo eliminar a los dos lados de una instruccion 
// console.log(producto.trim());