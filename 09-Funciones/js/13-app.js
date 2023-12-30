//Metodos de propiedad con un arrow function

const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo cancion con el Id ${id}`),
    // pausar: function(){
    //     console.log('pausando...');
    // }, aqui no tiene parametro asi que es necesario poner los parentesis
    pausar: () => console.log('pausando...'),
    borrar: id =>  console.log(`Borrando cancion ${id}`),
    crearPlaylist: play => console.log(`Creando Playlist "${play}"`),
    escucharPlaylist: play => console.log(`Escuchando la Playlist "${play}"`),

    set nuevaCancion (cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }

}

reproductor.nuevaCancion = 'Fall In Love'
reproductor.obtenerCancion;


reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Radio de Frank');
reproductor.crearPlaylist('HipHop Alternativo ');
reproductor.escucharPlaylist('Radio de Frank');