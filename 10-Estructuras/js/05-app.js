// Switch Case para multiples condiciones

const metodoPago = 'cheque'; //si en vez de tarjeta cambio a cheque se ejecuta el default

switch(metodoPago){
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    default:
        console.log('Aun no has seleccionado un metodo de pago, selecciona uno')
        break;
}
