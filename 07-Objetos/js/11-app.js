const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`EL producto: ${this.nombre} tiene un precio de: ${this.precio}`) //this le dice que busque los valores dentro del mismo objeto
    }
}

producto.mostrarInfo();