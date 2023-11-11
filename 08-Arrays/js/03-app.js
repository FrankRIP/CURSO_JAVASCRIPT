//RECORRER ARREGLOS
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

console.table(meses);


//Conocer cuanto mide el arreglo
console.log(meses.length);

for(let i = 0; i < meses.length; i++) { //empieza de la posicion 0, hasta que i sea menor que lo largo del arreglo e ira aumentandoi de uno en uno
    console.log( meses[i] ); //le digo que me imprima meses desde la posicion i o sea que desarrolla la funcion del ciclo for
}