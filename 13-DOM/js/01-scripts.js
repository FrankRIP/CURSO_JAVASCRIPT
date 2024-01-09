//Acceder a elementos del HTML con document

let elemento;

elemento = document; //asi seleciono todo el documento
elemento = document.all; //me muestra todos los elementos que tiene el html
elemento = document.head; // me selecciona solo el head
elemento = document.body; // me selecciona solo el cuerpo del documento
elemento = document.domain; // me muestra en que sitio esta alojado mi pagina
elemento = document.forms; // me selecciona solo los formularios
elemento = document.forms[0]; //selecciona el formulario por el indice
elemento = document.forms[0].id; //selecciona el formulario por el id que tiene en el archivo html
elemento = document.forms[0].method; //selecciona el formulario por el metodo que tiene en el archivo html
elemento = document.forms[0].classList; //selecciona el formulario por las clases que tiene en el archivo html

elemento = document.links; //me indica todos los elementos que hay en el html
elemento = document.links[4]; //me indica por indice en que posicion esta el boton
elemento = document.links[4].classList; //me indica el nombre de la clase de ese boton 
elemento = document.links[4].className; //me indica el nombre de la clase de ese boton pero como string

elemento = document.images; //me selecciona todas la imagenes de mi documento html

elemento = document.scripts; //medice cuantos archivos javascript tengo en el html


console.log(elemento);