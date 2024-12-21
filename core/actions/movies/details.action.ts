import { movieApi } from '@/core/api/movie-api';
import type {
  CompleteMovie,
  MDBMovieDetailsResponse,
} from '@/infrastructure/interfaces';
import { MovieMapper } from '@/infrastructure/mappers';

export const detailsAction = async (id: number): Promise<CompleteMovie> => {
  try {
    const { data } = await movieApi.get<MDBMovieDetailsResponse>(`${id}`);
    return MovieMapper.fromTheMDBDetailsToCompleteMovie(data);
  } catch (error) {
    console.log(error);
    throw 'Cannot load the movie details';
  }
};
