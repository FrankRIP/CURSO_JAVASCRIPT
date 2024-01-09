
// cambiando los estilos 

/*
const encabezado = document.querySelector('h1'); //selecciono el encabezado
encabezado.style.backgroundColor = 'red'; //lo invoco y le cambio el estilo con el fondo de color rojo
encabezado.style.fontFamily = 'Arial'; //modifico la fuente
encabezado.style.textTransform = 'uppercase'; //convierto la letra a mayusculas
*/

const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'segunda clase')//asi agrego mas clases
card.classList.remove('card');//asi elimino una clase
console-log(card.classList);