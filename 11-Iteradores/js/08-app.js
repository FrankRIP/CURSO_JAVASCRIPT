// For in

const automovil = {
    modelo: 'Camaro',
    year: '1969',
    motor: '6.0'
}


// for( let propiedad in automovil ){ //
//     console.log(`${automovil}[propiedad]`); //asi accedo a los datos excatos del objeto
// }

/* 
Las diferencia entre for of y for in es que for of itera sibre arreglos y for in
itera sobre objetos
*/

/*
En escma script 7 integrearon la siguiente sintaxis
*/

for(let [llave, valor] of Object.entries(automovil) ){
    console.log(valor);
    console.log(llave);
}