import { Injectable } from '@nestjs/common';

@Injectable()
export class MovieService {
    getHello(): string {
        return 'Hello World!';
    }
    movies = [
        {
            id:1,
            title: 'Creed 3',
            description: ' In 2002 Los Angeles, a young Adonis "Donnie" Creed sneaks out with his best friend, Golden Gloves champion Damian "Diamond Dame" Anderson...',
        },
        {
            id:2,
            title: 'The Hunger Games',
            description: 'Synopsis. The nation of Panem is divided into 12 districts, ruled from the Capitol... ',
        },
        {
            id:3,
            title: 'The Mortal Instruments',
            description: 'Clary Fray\'s search for her missing mother leads her into an alternate New York called Downworld...',
        }
    ];

    getMovies() {
        return this.movies.map(e => ({id:e.id , title:e.title}));
    }
    getMoviesById(i) {
        return this.movies.find(e => e.id === +i);
    }

    sortMovies(sort){
        if(sort) {
            if (sort === 'desc') {
                return this.movies.sort((a, b) => b.title.localeCompare(a.title));
            }
            else if (sort ==='asc') {
                return this.movies.sort((a, b) => a.title.localeCompare(b.title));
            }
        }
    }
}
