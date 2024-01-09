// query selector

/*
podemos tener varios elementos con el mismo nombre de atributo pero
el metodo querySelector solo los va a mostrar el primero que se encuentre en el html
*/
const card = document.querySelector('.card');
console.log(card);

//podemos tener selectores especificos como en css
const info = document.querySelector('.premium .info');
console.log(info);

//asi se selecciona el segundo elemento que es card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

//podemos seleccionar tambien id
const formulario = document.querySelector('#formulario');
console.log(formulario); //igual que getElementById me va a seleccionar el primero del html

//seleccionar elementos html
const navegacion = document.querySelector('nav');
console.log(navegacion);

