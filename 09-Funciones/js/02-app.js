//aqui se usa algo conocido como hooley lo cual hace que se escanee dos veces el archivo 
//de codigo y en esta primera sintaxis si se reconoce la funcion y la manda a llamar
sumar(); 
function sumar() {
    console.log( 2+2 );
}


//aca hooley no funciona por la sintaxis que se usa
sumar2();
const sumar2 = function(){
    console.log( 3+ 3);
}

