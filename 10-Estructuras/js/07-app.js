// Operador OR para que se cumpla al menos una condicion

const efectivo = 300;
const credito = 1000;
const disponible = efectivo + credito;
const totalPagar = 600;


if(efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) { // a diferencia del && en || se puede cumplir un a u otra y en && deben ser cumplidas las dos condicinoes
    console.log('Si podemos pagar')
} else {
    console.log('Fondos insuficientes')
}