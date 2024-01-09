// findindex

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

/*
Al poner una coma y meter otro parametro, este sera el indice del elemento actual
entonces al ingresar i y mandarlo a llamar me dara el numero del indice del arreglo

meses.forEach((mes, i)  => {
    // console.log(i);
    // console.log(mes);
    if(mes === 'Abril'){
        console.log(`El mes se encontro en el indice ${i}`)
    }
})

*/ 

// Encontrar el indice abril
// Si no encuentra el indice que busca se imprimira un -1
const indice = meses.findIndex( mes => mes === 'Abril');
console.log(indice);

//Encontrar un indice de un arreglo de objetos
const indice2 = carrito.findIndex(producto => producto.precio === 100);
console.log(indice2);