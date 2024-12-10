import { useQuery } from '@tanstack/react-query';

import { nowPlayingAction } from '@/core/actions/movies/now-playing.action';

export const useMovies = () => {
  // Queries
  const nowPlayingQuery = useQuery({
    queryKey: ['movies', 'nowPlaying'],
    queryFn: nowPlayingAction,
  });

  return {
    nowPlayingQuery,
  };
};
