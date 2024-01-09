//concat

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = [ 'Agosto', 'Septiembre'];


//con punto concat
const resultado = meses.concat(meses2, meses3, 'Otro mes'); //al agregarle otro valor entre comillas lo agrega al final del arreglo
console.log(resultado);


//con spread operator
const resultado2 = [...meses, ...meses2, ...meses3, 'Otro Mes'];
console.log(resultado2);

/*
con estos metodos hay que analizar bien el orden en el que estan indicados los valores
por que es la manera en que se imprimiran
*/