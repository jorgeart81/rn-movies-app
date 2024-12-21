import { movieApi } from '@/core/api/movie-api';
import type { MDBResponse, Movie } from '@/infrastructure/interfaces';
import { MovieMapper } from '@/infrastructure/mappers';

export const nowPlayingAction = async (): Promise<Movie[]> => {
  try {
    const { data } = await movieApi.get<MDBResponse>('/now_playing');
    const movies = [...data.results].map(MovieMapper.fromTheMDBToMovie);
    return movies;
  } catch (error) {
    console.log(error);
    throw 'Cannot load now playing movies';
  }
};
