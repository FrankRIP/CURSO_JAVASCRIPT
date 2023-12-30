//Metodos de propiedad
//Añadir funciones a los objetos

const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion con el Id ${id}`);
    },
    pausar: function(){
        console.log('pausando...');
    },
    borrar: function(id){
        console.log(`Borrando cancion ${id}`);
    },
    crearPlaylist: function(play){
        console.log(`Creando Playlist "${play}"`);
    },
    escucharPlaylist: function(play){
        console.log(`Escuchando la Playlist "${play}"`)
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Radio de Frank');
reproductor.crearPlaylist('HipHop Alternativo ');
reproductor.escucharPlaylist('Radio de Frank');