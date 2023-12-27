//Como se comunican las funciones

inciarApp();


function inciarApp(){
    console.log('Iniciando App..');
    segundaFuncion(); //asi mando a llamar la segunda funcion
}

function segundaFuncion(){
    console.log('Desde la segunda funcion');
    usuarioAutenticado('Frank');
}

function usuarioAutenticado(usuario){
    console.log('Autenticando Usuario, espere...');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}