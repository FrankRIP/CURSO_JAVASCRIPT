//some y includes

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//vamos a revisar si existe un valor en el arreglo
/* 
ASI SE RESUELVE DE FORMA MANUAL

meses.forEach(mes => {
        if(mes === 'Enero'){
            console.log('Enero si existe')
        }
});
*/
 // ASI SE RESUELVE CON EL METODO
const resultado = meses.includes('Enero'); //includes solo funciona con arreglos de indice
console.log(resultado)

// En un arreglo de objetos se usa .some
const existe = carrito.some(producto => producto.nombre === 'Celular');

console.log(existe); // si existe el valor me lo va a regresar en booleano

//tambien se puee usar en un arreglo tradicional
const existe2 = meses.some (mes => mes === 'Febrero');
console.log(existe2); 