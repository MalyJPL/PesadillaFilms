import { Showtime } from '../modelo/showtime';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
// import mockData from './mock-data.json';
import { Database } from '../modelo/database';
import { ShowtimeDate } from '../modelo/showtime-date';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const data: Database = this.getMockData();

    // setup demo showtimes data
    const randomDate = [
      [1, 0, 1, 0, 1, 0, 0],
      [0, 1, 1, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 1, 0],
      [1, 1, 0, 1, 1, 0, 0],
      [0, 1, 1, 0, 0, 1, 1],
      [1, 0, 0, 1, 1, 1, 1],
      [0, 0, 0, 1, 0, 1, 0],
      [1, 0, 0, 0, 1, 0, 1]
    ];

    for (const i in data.showtimes) {
      if (data.showtimes[i]) {
        const today = new Date();
        const showtime = data.showtimes[i].showtimes[0];
        data.showtimes[i].showtimes = [];

        for (let c = 0; c < 7; c++) {
          if (randomDate[i][c]) {
            const newShowtime: ShowtimeDate = {
              date: this.dateToString(today),
              times: showtime.times
            };

            data.showtimes[i].showtimes.push(newShowtime);
          }

          today.setDate(today.getDate() + 1);
        }
      }
    }

    return data;
  }

  private dateToString(date: Date): string {
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
  }

  private getMockData(): Database {
    return {
      movies: [
        {
          id: 1,
          imdbId: 'tt2386490',
          imdbRating: 8.1,
          title: 'El conjuro',
          poster: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS-gWuT95HoCQ_Jhgd7Cn6yQP_xuBqj1fbg56AYViHldOEsZ7P-',
          backdrop: 'https://www.xtrafondos.com/wallpapers/el-conjuro-726.jpg',
          trailer: 'https://www.youtube.com/watch?v=oUyHULb7xDI',
          overview: 'A principios de los años 70, Ed y Lorrain Warren, reputados investigadores de fenómenos paranormales, se enfrentan a una entidad demoníaca al intentar ayudar a una familia que está siendo aterrorizada por una presencia oscura en su aislada granja.',
          director: 'James Wan',
          cast: [
            'Ron Livingston',
            'Shannon Kook'

          ],
          release_date: '02/01/2019',
          start_date: '02/01/2019',
          end_date: '04/01/2019',
          runtime: 104,
          mpaa: 'PG'
        },
        {
          id: 2,
          imdbId: 'tt0437086',
          imdbRating: 6,
          title: 'La matanza de Texas',
          poster: 'https://vignette.wikia.nocookie.net/cine/images/2/20/Texas_chainsaw_massacre.jpg/revision/latest/scale-to-width-down/340?cb=20121014163029',
          backdrop: 'http://images2.fanpop.com/images/photos/3200000/The-Texas-Chainsaw-Massacre-2006-wallpapers-the-texas-chainsaw-massacre-3277942-1280-1024.jpg',
          trailer: 'https://www.youtube.com/watch?v=0jiIGZwnntU',
          overview:
            'Un grupo de jóvenes viaja en una furgoneta. Son los hermanos Sally y Franklin Hardesty, éste último parapléjico, y sus amigos Jerry, Kirk y Pam. En su camino recogen a un autoestopista, que se comporta de una forma extraña, pues se hiere a sí mismo y a Franklin con una navaja. Los chicos le obligan a bajar del vehículo. Cuando lo hace, el inquietante desconocido marca la furgoneta con su sangre. El grupo llega a una granja propiedad de la familia Hardesty. Kirk y Pam se alejan buscando un sitio en el que poder nadar y llegan hasta una propiedad vecina. Kirk entra para pedir combustible para la furgoneta pero allí es atacado por un hombre que lleva una máscara de piel humana. A partir de ese momento, todos los jóvenes del grupo irán cayendo, uno tras uno, bajo los ataques de este asesino, que forma parte de una familia de caníbales.',
          director: 'Tobe Hooper',
          cast: ['Marilyn Burns', 'Gunnar Hansen', 'Edwin Neal'],
          release_date: '02/05/2019',
          start_date: '02/05/2019',
          end_date: '04/05/2019',
          runtime: 132,
          mpaa: 'PG-13'
        },
        {
          id: 3,
          imdbId: 'tt6823368',
          imdbRating: 7.3,
          title: 'Puerta al infierno',
          poster: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/cover_290x414/public/media/image/2016/11/hellraiser.jpg?itok=JV6EqLE4',
          backdrop: 'https://www.wallpaperup.com/uploads/wallpapers/2013/12/24/204142/2029433714509144362b8fffe7a90079.jpg',
          trailer: 'https://www.youtube.com/watch?v=842T2f9Qy5s',
          overview:
            'Frank Cotton, un hombre joven y ambicioso, adquiere una misteriosa caja negra que procede de un bazar oriental. La caja no es lo que parece ya que, una vez a solas en casa, Frank descubre que ésta tiene poderes mágicos y que permite la entrada a unas extrañas criaturas llamadas cenobitas procedentes de otra dimensión. Éstas son mucho más terribles y violentas de lo que imaginaba y finalmente acabarán con la vida de Frank y volverán a su mundo llevándose consigo la caja negra. ',
          director: 'Clive Barker',
          cast: [
            'Doug Bradley',
            'Ashley Laurence',
            'Clare Higgins'
           
          ],
          release_date: '01/18/2019',
          start_date: '01/18/2019',
          end_date: '03/18/2019',
          runtime: 129,
          mpaa: 'PG-13'
        },
        {
          id: 4,
          imdbId: 'tt1477834',
          imdbRating: 7.5,
          title: 'El amanecer de los muertos',
          poster: 'https://es.web.img3.acsta.net/pictures/15/11/11/08/23/367003.jpg',
          backdrop: 'https://www.wallpaperup.com/uploads/wallpapers/2014/01/26/238033/8f4f993a878ac03bf963eaa30379e04e.jpg',
          trailer: 'https://www.youtube.com/watch?v=IFhrY-UpATU',
          overview:
            'El mundo ha sido invadido por muertos vivientes sedientos por acabar con la raza humana. Ana Clark (Sarah Polley) es una de las pocas que ha conseguido sobrevivir a la tragedia y cuando va buscando un refugio donde mantenerse a salvo conoce a un grupo de personas que, como ella, aún se mantienen con vida. Los supervivientes se dirigen a un centro comercial donde lucharán por repartirse los víveres y por impedir la entrada de los zombies. A su lucha por salvar la vida se unirán los problemas personales de cada uno de los miembros del grupo.',
          director: 'Zack Snyder',
          cast: [
            'Sarah Polley',           
            'Ving Rhames',
            'Jake Weber'
          ],
          release_date: '12/21/2018',
          start_date: '12/21/2018',
          end_date: '03/12/2019',
          runtime: 143,
          mpaa: 'PG-13'
        },
        {
          id: 5,
          imdbId: 'tt5028340',
          imdbRating: 7.2,
          title: 'Viernes 13',
          poster: 'https://es.web.img3.acsta.net/r_1280_720/medias/nmedia/18/66/93/20/19021339.jpg',
          backdrop: 'https://hdwallpapers.cat/wallpaper/friday-the-13th-wallpaper-jason-voorheees-8Rr3.jpg',
          trailer: 'https://www.youtube.com/watch?v=gz3MkaQ85i0',
          overview:
            'Basada en la popular película homónima de 1980, este remake pretende actualizar al mítico ícono del terror Jason Voorhees, que ya había reaparecido en la película de Freddy contra Jason (2003). En la película, un grupo de jóvenes es asesinado por Jason, por lo que Clay, ante la desaparición de su hermana, decide ir a buscarla al bosque de Crystal Lake.Clay contará con la ayuda de una joven con la que se cruza de camino al lago, donde encontrará unas cabañas en mal estado que parecen deshabitadas. Cuando comiencen a explorar el recinto de las viviendas, haciendo caso omiso a las advertencias de los guardias, no tendrán ni idea de que se están adentrando en un territorio en el que Jason es el despiadado cazador que irá tras ellos.',


          director: ' Marcus Nispel',
          cast: [
            'Jared Padalecki',
            'Amanda Righetti',
            'Derek Mears',
            'Ben Whishaw',
            'Emily Mortimer'
          ],
          release_date: '12/21/2018',
          start_date: '12/21/2018',
          end_date: '03/12/2019',
          runtime: 130,
          mpaa: 'PG'
        },
        {
          id: 6,
          imdbId: 'tt6966692',
          imdbRating: 8.3,
          title: 'Halloween',
          poster: 'https://i.ebayimg.com/images/g/brsAAOSw-w9dwNKk/s-l400.jpg',
          backdrop: 'https://screenrobot.com/wp-content/uploads/2019/07/halloween-2018.jpg',
          trailer: 'https://www.youtube.com/watch?v=qA4BhxcxP-w',
          overview:
            'El psicótico Michael Myers vuelve a la gran pantalla en el enfrentamiento final. Laurie Strode (Jamie Lee Curtis), que logró escapar de su matanza en la noche de Halloween cuatro décadas atrás, no ha olvidado aquel fatídico encuentro en el que fue la única superviviente. Por eso, cuarenta años más tarde, Laurie, que ahora es abuela, ha convertido su casa en un búnker impenetrable, por si Myers decidiera regresar algún día. Cuando la amenaza de Myers sea un hecho, la familia Strode, liderada por tres generaciones de mujeres, abuela, madre e hija, se convertirán en la única esperanza para acabar con el villano. La hora de su confrontación final con esta terrorífica figura enmascarada ha llegado. ',
          director: 'John Carpenter',
          cast: ['Jamie Lee Curtis', 'Nick Castle', 'Linda Cardellini'],
          release_date: '11/16/2018',
          start_date: '11/16/2018',
          end_date: '03/16/2019',
          runtime: 130,
          mpaa: 'PG-13'
        },
        {
          id: 7,
          imdbId: 'tt5848272',
          imdbRating: 7.3,
          title: 'Psicosis',
          poster: 'https://www.tuposter.com/pub/media/catalog/product/cache/image/700x560/91bbed04eb86c2a8aaef7fbfb2041b2a/f/i/file_129_44.jpg',
          backdrop: 'https://images4.alphacoders.com/810/thumb-1920-810011.jpg',
          trailer: 'https://www.youtube.com/watch?v=SgZZDzoJuZs',
          overview: 'Inspirada en la novela homónima de Robert Bloch, la historia está ambientada en un tétrico motel de carretera llamado cuyo dueño es Norman Bates. Junto al motel hay una casa, tan poco acogedora como el edificio, en la que reside el señor Bates con su madre.',
          director: 'Alfred Hitchcock',
          cast: ['Anthony Perkins', 'Vera Miles', 'Sarah Silverman'],
          release_date: '11/21/2018',
          start_date: '11/21/2018',
          end_date: '02/21/2019',
          runtime: 112,
          mpaa: 'PG'
        },
        {
          id: 8,
          imdbId: 'tt5886046',
          imdbRating: 6.4,
          title: 'Sin salida',
          poster: 'https://m.media-amazon.com/images/M/MV5BMjQ2NDMwMTY3MF5BMl5BanBnXkFtZTgwNDg5OTc1NjM@._V1_SX300.jpg',
          backdrop: 'https://m.media-amazon.com/images/M/MV5BMTk3OTI0NDQ4OF5BMl5BanBnXkFtZTgwNTYwMDg1NjM@._V1_.jpg',
          trailer: 'https://www.youtube.com/watch?v=6dSKUoV0SNI',
          overview:
            'Seis desconocidos reciben un misterioso paquete. En su interior, se encuentra un mensaje que promete al propietario una oportunidad para alejarse de su vida rutinaria. El grupo llega a la localización señalada y se dan cuenta de que se disponen a competir en una escape room. Pronto descubrirán que, sea quien sea, el que ha organizado el juego conoce todos y cada uno de los detalles de sus vidas. Ahora no tendrán más remedio que encontrar las pistas y resolver el puzzle. Solo así saldrán con vida de esa habitación',
          director: 'Adam Robitel',
          cast: ['Deborah Ann Woll', 'Taylor Russel'],
          release_date: '01/04/2019',
          start_date: '01/04/2019',
          end_date: '04/01/2019',
          runtime: 99,
          mpaa: 'PG-13'
        }
      ],
      showtimes: [],
  }
}
}
