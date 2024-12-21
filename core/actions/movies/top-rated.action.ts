import { movieApi } from '@/core/api/movie-api';
import type { MDBResponse, Movie } from '@/infrastructure/interfaces';
import { MovieMapper } from '@/infrastructure/mappers';

interface Options {
  limit?: number;
  page?: number;
}

export const topRatedAction = async ({
  page = 1,
  limit = 10,
}: Options): Promise<Movie[]> => {
  try {
    const { data } = await movieApi.get<MDBResponse>('/top_rated', {
      params: { page },
    });
    const movies = [...data.results].map(MovieMapper.fromTheMDBToMovie);
    return movies;
  } catch (error) {
    console.log(error);
    throw 'Cannot load top rated movies';
  }
};
