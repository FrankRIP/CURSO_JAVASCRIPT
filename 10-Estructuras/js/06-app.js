//Operador && para que se cumplan 2 o mas condiciones

const usuario = false;
const puedePagar = false;

if(usuario && puedePagar){  // && que se cumpla una condicion y la otra
    console.log('Si puedes pagar')
} else if(!puedePagar && !usuario){
    console.log('No puedes comprar')
} else if(!usuario){ // ! SI no cumple la condicion
    console.log('Inicia sesion o crea una cuenta')
} else if(!puedePagar){
    console.log('No tienes fondos suficientes')
}