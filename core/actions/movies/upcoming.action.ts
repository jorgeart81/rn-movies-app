import { movieApi } from '@/core/api/movie-api';
import type { MDBResponse, Movie } from '@/infrastructure/interfaces';
import { MovieMapper } from '@/infrastructure/mappers';
import { MDBUpcomingResponse } from '../../../infrastructure/interfaces/movie-db.interface';

export const upcomingAction = async (): Promise<Movie[]> => {
  try {
    const { data } = await movieApi.get<MDBUpcomingResponse>('/upcoming');
    const movies = [...data.results].map(MovieMapper.fromTheMDBToMovie);
    return movies;
  } catch (error) {
    console.log(error);
    throw 'Cannot load upcomig movies';
  }
};
