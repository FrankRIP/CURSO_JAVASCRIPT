// promp es un popup en el que se puede escribir
const nombre = prompt ('¿Cual es tu nombre?') 
//toma el nombre con el prompt y le agrega la frase de al final
document.querySelector('.contenido').innerHTML = `${nombre} esta aprendiendo Javascript Moderno`

