import { Showtime } from './../interface/showtime';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
// import mockData from './mock-data.json';
import { Database } from '../interface/database';
import { ShowtimeDate } from '../interface/showtime-date';

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
          trailer: 'https://www.youtube.com/watch?v=OFeI5ohUVSA',
          overview: 'A principios de los años 70, Ed y Lorrain Warren, reputados investigadores de fenómenos paranormales, se enfrentan a una entidad demoníaca al intentar ayudar a una familia que está siendo aterrorizada por una presencia oscura en su aislada granja.',
          director: 'James Wan',
          cast: [
            'Jay Baruchel',
            'Cate Blanchett'

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
          trailer: 'https://www.youtube.com/watch?v=w7pYhpJaJW8',
          overview:
            'An action-packed story of one young woman\'s journey to discover the truth of who she is and her fight to change the world.',
          director: 'Tobe Hooper',
          cast: ['Eiza González', 'Jennifer Connelly', 'Jackie Earle Haley'],
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
          trailer: 'https://www.youtube.com/watch?v=95ghQs5AmNk',
          overview:
            'Starring an incredible trio of Bruce Willis, Samuel L. Jackson, and James McAvoy, Glass is the latest film from director M. Night Shyamalan and follows the stories of David Dunn and Kevin Crumb, who come up against each other as Dunn pursues The Beast, determined to put an end to the superhuman nightmare. When the mysterious Elijah Price, aka Mr. Glass, reappears in Dunn’s life, the three men are forced to accept they’re part of something much larger – and it’s Mr. Glass who holds the secrets that could change everything. Anya Taylor-Joy returns as Casey Cooke, and Sarah Paulson stars as psychologist Dr. Ellie Staple, who is drawn into the men’s parallel reality.',
          director: 'M. Night Shyamalan',
          cast: [
            'Samuel L. Jackson',
            'Anya Taylor-Joy',
            'Bruce Willis',
            'Gerard Butler',
            'James McAvoy'
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
          trailer: 'https://www.youtube.com/watch?v=WDkg3h8PCVU',
          overview:
            'The reluctant King of Atlantis is torn between his two homes as surface dwellers and the citizens of Atlantis collide. Following on from the events of Justice League, Aquaman stars Jason Momoa as the half-Atlantean, alongside Amber Heard, Patrick Wilson, Willem Dafoe and Nicole Kidman.',
          director: 'Zack Snyder',
          cast: [
            'Jason Momoa',           
            'Patrick Wilson',
            'Willem Dafoe'
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
          backdrop: 'https://m.media-amazon.com/images/M/MV5BMTA4MTEyMDQ4MzdeQTJeQWpwZ15BbWU4MDIxNzA0MDcz._V1_SX1500_CR0,0,1500,999_AL_.jpg',
          trailer: 'https://www.youtube.com/watch?v=PzcaR1N0pTI',
          overview:
            'It’s 1930s London and everyone’s favourite nanny has returned – Mary Poppins (Emily Blunt) is ready to spread joy and magic in the much-anticipated sequel to the 1964 classic. This time, she finds that the Banks children have grown up and found themselves in need of a friendly face – as well as a little bit of magic. A Disney musical and sequel starring Emily Blunt, Lin-Manuel Miranda, and Ben Wishaw, along with Dick Van Dyke, Emily Mortimer, Colin Firth, and Meryl Streep.',
          director: 'Rob Marshall',
          cast: [
            'Emily Blunt',
            'Meryl Streep',
            'Dick Van Dyke',
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
          backdrop: 'https://m.media-amazon.com/images/M/MV5BMmE2OGVkNjktZGFhMS00YTZkLTg5Y2ItYmExZDgyMzA4YmU1XkEyXkFqcGdeQXVyNTc5OTMwOTQ@._V1_.jpg',
          trailer: 'https://www.youtube.com/watch?v=QkZxoko_HC0',
          overview:
            'Two unlikely travelling companions must navigate the terrifying racism of the deep south in 1962, in this road-trip comedy-drama based on a true story. Directed by Peter Farrelly, Green Book stars Academy Award winner Mahershala Ali and two-time nominee Viggo Mortensen, alongside Linda Cardellini.',
          director: 'Peter Farrelly',
          cast: ['Mahershala Ali', 'Viggo Mortensen', 'Linda Cardellini'],
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
          backdrop: 'https://m.media-amazon.com/images/M/MV5BMTgxNTM2Njk3M15BMl5BanBnXkFtZTgwOTQyMjI5NDM@._V1_SX1777_CR0,0,1777,744_AL_.jpg',
          trailer: 'https://www.youtube.com/watch?v=T73h5bmD8Dc',
          overview: 'Just because he’s a Bad Guy, doesn’t mean he’s a bad guy. Ralph is back, and it’s on his wide shoulders to save Sugar Rush from extinction.',
          director: 'Phil Johnston, Rich Moore',
          cast: ['Alan Tudyk', 'John C. Reilly', 'Sarah Silverman'],
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
          title: 'Escape Room',
          poster: 'https://m.media-amazon.com/images/M/MV5BMjQ2NDMwMTY3MF5BMl5BanBnXkFtZTgwNDg5OTc1NjM@._V1_SX300.jpg',
          backdrop: 'https://m.media-amazon.com/images/M/MV5BMTk3OTI0NDQ4OF5BMl5BanBnXkFtZTgwNTYwMDg1NjM@._V1_.jpg',
          trailer: 'https://www.youtube.com/watch?v=6dSKUoV0SNI',
          overview:
            'Six strangers, all from wildly different walks of life, are invited to try out a brand-new escape room challenge and the chance to win a million dollars. But the hidden organisers have more planned than a puzzle… Escape Room is the latest horror from Insidious: Hidden Key director Adam Robitel, and stars Deborah Ann Woll, Taylor Russell, and Logan Miller.',
          director: 'Adam Robitel',
          cast: ['Deborah Ann Woll', 'Taylor Russel'],
          release_date: '01/04/2019',
          start_date: '01/04/2019',
          end_date: '04/01/2019',
          runtime: 99,
          mpaa: 'PG-13'
        }
      ],
      showtimes: [
        {
          movieId: 1,
          showtimes: [
            {
              date: '02/07/2019',
              times: [
                {
                  type: '3D',
                  time: '10:20 AM'
                },
                '11:00 AM',
                '1:00 PM',
                {
                  type: '3D',
                  time: '2:00 PM'
                },
                '4:00 PM',
                '6:00 PM',
                {
                  type: '3D',
                  time: '8:00 PM'
                },
                '10:00 PM'
              ]
            }
          ]
        },
        {
          movieId: 2,
          showtimes: [
            {
              date: '02/07/2019',
              times: ['12:45 PM', '4:20 PM', '6:30 PM', '8:00 PM', '10:00 PM']
            }
          ]
        },
        {
          movieId: 3,
          showtimes: [
            {
              date: '02/07/2019',
              times: [
                '10:20 AM',
                '12:00 PM',
                '1:45 PM',
                '3:00 PM',
                '5:30 PM',
                '6:45 PM'
              ]
            }
          ]
        },
        {
          movieId: 4,
          showtimes: [
            {
              date: '02/07/2019',
              times: [
                {
                  type: '3D',
                  time: '10:20 AM'
                },
                '11:00 AM',
                '1:00 PM',
                {
                  type: '3D',
                  time: '2:00 PM'
                },
                '4:00 PM',
                '6:00 PM',
                {
                  type: '3D',
                  time: '8:00 PM'
                },
                '10:00 PM'
              ]
            }
          ]
        },
        {
          movieId: 5,
          showtimes: [
            {
              date: '02/07/2019',
              times: [
                '10:20 AM',
                '12:00 PM',
                '1:45 PM',
                '3:00 PM',
                '5:30 PM',
                '6:45 PM'
              ]
            }
          ]
        },
        {
          movieId: 6,
          showtimes: [
            {
              date: '02/07/2019',
              times: ['12:45 PM', '4:20 PM', '6:30 PM', '8:00 PM', '10:00 PM']
            }
          ]
        },
        {
          movieId: 7,
          showtimes: [
            {
              date: '02/07/2019',
              times: [
                '10:20 AM',
                '12:00 PM',
                '1:45 PM',
                '3:00 PM',
                '5:30 PM',
                '6:45 PM'
              ]
            }
          ]
        },
        {
          movieId: 8,
          showtimes: [
            {
              date: '02/07/2019',
              times: [
                {
                  type: '3D',
                  time: '10:20 AM'
                },
                '11:00 AM',
                '1:00 PM',
                {
                  type: '3D',
                  time: '2:00 PM'
                },
                '4:00 PM',
                '6:00 PM',
                {
                  type: '3D',
                  time: '8:00 PM'
                },
                '10:00 PM'
              ]
            }
          ]
        }
      ]
    };
  }
}
