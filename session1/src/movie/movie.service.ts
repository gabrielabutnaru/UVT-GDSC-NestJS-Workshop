import { Injectable } from '@nestjs/common';

@Injectable()
export class MovieService {
  movies = [{
    id: 1,
    title: 'Star Wars',
    description: 'A long time ago in a galaxy far, far away...',
    imdbRating: 8.7,
    castNames: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
  },
  {
    id: 2,
    title: 'The Matrix',
    description: 'Welcome to the Real World',
    imdbRating: 8.7,
    castNames: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
  },
  {
    id: 3,
    title: 'The Avengers',
    description: 'Some assembly required',
    imdbRating: 8.1,
    castNames: ['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo'],
  }];

  getMovies() {
    return this.movies.map(e => ({ title: e.title, id: e.id }));
  }

  getMovieById(id) {
    return this.movies.find(e => e.id === +id);
  }

  sortMovies(sort) {
    if (sort) {
      if (sort === 'desc') {
        return this.movies.sort((a, b) => b.title.localeCompare(a.title));
      } else if (sort === 'asc') {
        return this.movies.sort((a, b) => a.title.localeCompare(b.title));
      }
    }
    return this.movies;
  }
}
