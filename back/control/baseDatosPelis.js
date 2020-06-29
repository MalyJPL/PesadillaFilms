//baseDatos película
await Pelicula.create({
    categoria: 'asesinatos',
    titulo: 'Saw',
    sinopsis:'Adam se despierta encadenado a un tubo oxidado dentro de una decrépita cámara subterránea. A su lado, hay otra persona encadenada, el Dr. Lawrence Gordon. Entre ellos hay un hombre muerto. Ninguno de los dos sabe por qué está allí, pero tienen un casette con instrucciones para que el Dr. Gordon mate a Adam en un plazo de ocho horas. Recordando una investigación de asesinato llevada a cabo por un detective llamado Tapp, Gordon descubre que él y Adam son victimas de un psicópata conocido como Jigsaw. Sólo disponen de unas horas para desenredar el complicado rompecabezas en el que están inmersos.',
    director:'James Wan',
    protagonistas:'Cary Elwes, Leigh Whannell, Danny Glover, Monica Potter, Dina Meyer, Tobin Bell, Shawnee Smith, Ken Leung, Alexandra Bokyun Chun, Michael Emerson, Makenzie Vega, Mike Butters, Paul Gutrecht, Benito Martinez',
    duracion: '100 min.',
    trailer: './files/peliculas/trailer/sawTrailer',
    online: './files/peliculas/trailer/sawTrailer',
    cover: './files/peliculas/cover/sawCover',
    poster: './files/peliculas/wallpaper/sawWallpaper',
    estado: 1
})

