export class Pelicula {
    constructor(
        public _id: String,
        public categoria: String,
        public titulo: String,
        public sinopsis: String,
        public director: String,
        public protagonistas: String,
        public duracion: String,
        public trailer: String,
        public online: String,
        public cover: String,
        public poster: String,
        public estado: Boolean
    ){}
}
