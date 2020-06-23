export class Pelicula {
    constructor(
        public _id: String,
        public categoria: String,
        public titulo: String,
        public sinopsis: String,
        public director: String,
        public protagonistas: Number,
        public duracion: String,
        public trailer: String,
        public archivo: String,
        public cover: String,
        public poster: String
    ){}
}