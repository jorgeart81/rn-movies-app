import { movieApi } from '@/core/api/movie-api';
import type { Cast, MDBCreditsResponse } from '@/infrastructure/interfaces';
import { MovieMapper } from '@/infrastructure/mappers';

export const creditsAction = async (id: number): Promise<Cast[]> => {
  try {
    const { data } = await movieApi.get<MDBCreditsResponse>(`${id}/credits`);
    return data.cast.map(MovieMapper.fromTheMDBCastToEntity);
  } catch (error) {
    console.log(error);
    throw 'Cannot load the movie cast';
  }
};
