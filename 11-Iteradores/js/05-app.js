// Ciclo do While

let i = 0; // inicializacion

do{
    if( i % 15 === 0){
        console.log(`${i} FIZZ BUZZ`)
    } else if (i % 3 === 0){
        console.log(`${i} fizz`)
    }else if (i % 5 === 0){
        console.log(`${i} buzz`)
    }
    i++; // incremento
}while(i < 100 ); // condicion

// la diferencia entre while y do while es que do while al menor se ejecuta una vez
// y while si no se cumple la condicion no se ejecutara nada