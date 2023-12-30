//Arrow funtions
const aprendiendo = function(){
    console.log('Aprendiendo JavaScript');
}

const aprendiendo2 = () => {
    console.log('Aprendiendo JavaScript');
}

//tambien con los arrows function podemos recortar sintaxis de la siguiente manera

//al colocar una arrow function da por enterado que regresa un return por lo tanto
//puedo mandar a llamar el console.log cuando invoque la funcion al final
const aprendiendo3 = () => ('Esto es un arrow function');

aprendiendo2();
console.log(aprendiendo3()); //mando a llamar la funcion 