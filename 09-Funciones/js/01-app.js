//existen dos maneras de crear las funciones, que son Function expression y function declaration

//declaracion de funcion (function declaration)
function sumar() {
    console.log( 2+2 );
}

sumar(); //aqui mando a llamar la funcion


//expresion de funcion (function expression)
const sumar2 = function(){
    console.log( 3+ 3);
}

sumar2();