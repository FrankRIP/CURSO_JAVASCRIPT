//modificar texto e imagenes con js

const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);

/*
console.log(encabezado.innerText); //si en el CSS hay un "visibility: hidden" innerText no lo va a encontrar
console.log(encabezado.textContent); //si lo va a encontrar
console.log(encabezado.innerHTML); //lo imprime con el elemento html
*/

//modificar el elemento en la parte grafica del html
// document.querySelector('.contenido-hero h1').textContent = 'con esto modifico el titulo';

//asi modifico mi imagen del html
const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg'