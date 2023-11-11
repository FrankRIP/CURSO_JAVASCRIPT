//CREAR UN ARREGLO CON SPREAD OPERATOR (O DE FORMA DECLARATIVA)
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

const producto3 = {
    nombre: 'Teclado',
    precio: 50,
}

let resultado //creo una nueva variable
//se agregam elementos al final
resultado = [...carrito, producto]; //invoco la variable y creo una copia de carrito, y agrego el objeto producto
resultado = [...resultado, producto2];//creo un copia de carrito y le agrego el obejto producto2
//se agregan elementos al inicio
resultado = [producto3, ...resultado]; //primero agrego el elemento y luego creo la copia del carrito

console.table(resultado);