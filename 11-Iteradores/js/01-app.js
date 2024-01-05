// Iterador For Loop


//el primera parte del for, es el inicializador, desde donde cuenta o se repite el codigo
// la segunda parte es la condicion que se va a revisar 
//la tercera parte es el incremento (de cuanto en cuanto se va a repetir el codigo)
// for(let i = 0; i < 10; i ++ ){
//     console.log(`Numero ${i}`)

// }


// for( let i = 1; i <= 20; i ++ ){
//     if( i % 2 === 0){
//         console.log(`El numero ${i} es PAR`);
//     } else{
//         console.log(`El numero ${i} es IMPAR`);
//     }
// }

const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
]

console.log(carrito.length);

for(let i = 0; i < carrito.length; i++){
    console.log(carrito[i].nombre);
}