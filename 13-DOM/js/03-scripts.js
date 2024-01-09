// getElementsById

/* 
por documento html solo debe haber un Id por elementos, no se debe repetir el nombre de
id para evitar problemas
*/

const formulario = document.getElementById('formulario');
console.log(formulario);

/*
si tengo dos id con el mismo nombre (que no deberia ser asi) el metodo getElementsById solo
va a seleccionar el primero que se encuentre en el html
*/