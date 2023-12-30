//Parametros y funciones en un arrow function

const aprendiendo = function(tecnologia, tecnologia2){//declaro el parametro con el nombre de tecnologia
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}
aprendiendo('JavaScript', 'Node.js')//el argumento del parametro sera JavaScript



const aprendiendo2 = tecnologia => `Aprendiendo a programar con ${tecnologia}`; //cuando solo es un parametro, los parentesis son opcionales
console.log(aprendiendo2('Javascript'));

//cuando lleva dos parametros el arrow function ahora si es necesario colocar parentesis
const aprendiendo3 = (tecnologia1, tecnologia2) => `Aprendiendo ${tecnologia1} y tambien ${tecnologia2}`;
console.log(aprendiendo3('JavaScript' , 'Node.js'))