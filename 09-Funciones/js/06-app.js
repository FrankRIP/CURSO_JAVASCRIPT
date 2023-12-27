//Parametros por default

function saludar(nombre, apellido = ''){ //al ponerle un signo de igual y comiilas vacias le digo que si no existe argumento pogna el parametro vacio
    console.log(`Hola, ${nombre} ${apellido}`); 
}

saludar('Frank');
