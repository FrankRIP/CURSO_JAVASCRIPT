const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

//revisar si dos numero son iguales
console.log(numero1 == numero3);
console.log(numero1 == numero2);

//comparador estricto
console.log(numero1 === numero2);
console.log(numero1 === parseInt(numero2)); //analiza una cadena para determinar si contiene un valor entero


//diferente
const password1 = "admin";
const password2= "Admin";

console.log(password1 != password2);
console-log(numero1 != numero2);
console.log(numero1 !== numero2);//comparados estricto "diferente a"