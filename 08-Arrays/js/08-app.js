//DESTRUCTURING DE ARRAYS

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}



//Destructuring
// const { nombre } = producto;
// console.log(nombre);

//Destructuring con arreglos
const numeros = [10, 20, 30, 40, 50];

// // const [primero, segundo, tercero] = numeros; //asi accedo a la posicion 2 que el numero 30
// // //debido a que cada posicion es agregada a cada variable dentro del corchete dentro de la nueva variable
// // //10 al primero, 20 al segundo, tercero al 30 y asi sucesivamente

// o puede ser con comas
// const [, , tercero] = numeros;
// console.log(tercero);
// //si quiero mas elementos del array le hago de la siguiente manera
// // const [primero , , tercero] = numeros;

//si quiero invocar el primer elemento y el segundo 
//y quiero que los demas elementos salgan en un nuevo arreglo seria con el rest operator
const [primero, segundo, ... tercero] = numeros;
console.log(tercero);