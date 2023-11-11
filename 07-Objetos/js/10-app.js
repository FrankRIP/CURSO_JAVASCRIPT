const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas); // De esta manera se juntan 2 objetos

//Spread Operator o Rest Operator
//otro metodo para juntar dos objetos
const resultado2 = { ...producto, ...medidas} //los 3 punto es decirle que copie las variables

console.log(resultado);
console.log(resultado2);