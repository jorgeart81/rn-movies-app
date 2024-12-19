import { movieApi } from '@/core/api/movie-api';
import type { MDBResponse, Movie } from '@/infrastructure/interfaces';
import { MovieMapper } from '@/infrastructure/mappers';

export const topRatedAction = async (): Promise<Movie[]> => {
  try {
    const { data } = await movieApi.get<MDBResponse>('/top_rated');
    const movies = [...data.results].map(MovieMapper.fromTheMovieDBToMovie);
    return movies;
  } catch (error) {
    console.log(error);
    throw 'Cannot load top rated movies';
  }
};
