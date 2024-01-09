// getElementByClassName


/*
para referirnos al documento siempre se pone "document" y para seleccionar
elementos por medio del nombre de la clase ponemos el metodo "getElementsByClassName" y luego
entre parentesis el nombre de la clase a seleccionar
*/
const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

// si la clases existen mas de una vez me va a traer todas en un arreglo
const contenedores = document.getElementsByClassName('contenedores');
console.log(contendores);