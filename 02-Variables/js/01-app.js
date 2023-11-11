//var es para declarar la variable, luego se le indica un nombre y despues se ingresa el valor
var producto = "Monitor de 24 Pulgadas";
console.log(producto);

//tambien se puede reasignar el valor de la variable
pruducto = 'Monitor de 19 Pulgadas';
console.log(producto);

//en javascript no es necesario indicar el tipo de variable, ya solo sabe que tipo es
producto = 20;
console.log(producto);

//tambien se puede inicializar variables y asignar el valor despues
var disponible;
disponible = true;

disponible = false;

//iniciar multiples variables
//se puede hacer asi de la siguiente manera para no colocar muchos var
var categoria = 'Computadoras',
    marca = 'Marca Famosa',
    calificacion = 5;

//tipos de nombres de variables

var nombreProducto; //CAMELCASE
var nombre_producto; //UNDERSCORE O SNAKE
var NombreProducto; //PASCALCASE