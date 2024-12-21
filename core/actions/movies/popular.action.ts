import { movieApi } from '@/core/api/movie-api';
import type { MDBNowPlayingResponse, Movie } from '@/infrastructure/interfaces';
import { MovieMapper } from '@/infrastructure/mappers';

export const popularAction = async (): Promise<Movie[]> => {
  try {
    const { data } = await movieApi.get<MDBNowPlayingResponse>('/popular');
    const movies = [...data.results].map(MovieMapper.fromTheMDBToMovie);
    return movies;
  } catch (error) {
    console.log(error);
    throw 'Cannot load polular movies';
  }
};
