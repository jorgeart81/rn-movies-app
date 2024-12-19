import { useQuery } from '@tanstack/react-query';

import { nowPlayingAction } from '@/core/actions/movies/now-playing.action';
import { popularAction } from '@/core/actions/movies/popular.action';

export const useMovies = () => {
  // Queries
  const nowPlayingQuery = useQuery({
    queryKey: ['movies', 'nowPlaying'],
    queryFn: nowPlayingAction,
    staleTime: 86400000, // 24 hours -> 1000 * 60 * 60 * 24
  });

  const popularQuery = useQuery({
    queryKey: ['movies', 'popular'],
    queryFn: popularAction,
    staleTime: 86400000, // 24 hours -> 1000 * 60 * 60 * 24
  });

  return {
    nowPlayingQuery,
    popularQuery,
  };
};
