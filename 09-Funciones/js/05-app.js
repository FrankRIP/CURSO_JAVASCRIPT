//Parametros y argumentos en funciones
function sumar(a, b) { //a y b son parametros de la funcion (valores representativos)
    console.log( a + b );
}

sumar(2, 3); // 2 toma el lugar de a y 3 toma el lugar de b
//2 y 3 se le conoce como argumentos (valores reales)

sumar(200 + 184);

function saludar(nombre, apellido){
    console.log(`Hola, ${nombre} ${apellido}`); 
}

saludar('Frank', 'Moran');