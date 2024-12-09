import { movieApi } from '@/core/api/movie-api';
import { MDBPNowPlayingResponse } from '@/infrastructure/interfaces';

export const nowPlayingAction = async () => {
  try {
    const { data } = await movieApi.get<MDBPNowPlayingResponse>('/now_playing');
    console.log(JSON.stringify(data, null, 2));
    return [];
  } catch (error) {
    console.log(error);
    throw 'Cannot load now playing movies';
  }
};
