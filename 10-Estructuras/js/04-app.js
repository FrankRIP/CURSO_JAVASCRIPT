//Mayor o igual y else if

const dinero = 300;
const totalAPagar = 500;
const tarjeta = true;
const cheque = true;


if( dinero >= totalAPagar ){
    console.log('Si podemos pagar');
} else if(cheque) {
    console.log('Sitengo cheque');
} else if(tarjeta){
    console.log('Si puedo pagar por que tengo la tarjeta')
} else {
    console.log('Fondos Insuficientes');
}