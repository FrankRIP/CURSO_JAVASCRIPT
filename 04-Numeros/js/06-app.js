const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;


//estoy convirtiendo el string a numero
console.log(Number.parseInt(numero1));
console.log(Number.parseFloat(numero2));
console.log(Number.parseInt(numero3));//retornara un NaN por que no es numero


//Revisar si un numero es entero o no
//retorna si es true o false
console.log(Number.isInteger(numero4));
console.log(Number.isInteger(numero3));