import { useQuery } from '@tanstack/react-query';

import { nowPlayingAction } from '@/core/actions/movies/now-playing.action';
import { popularAction } from '@/core/actions/movies/popular.action';
import { topRatedAction } from '@/core/actions/movies/top-rated.action';
import { upcomingAction } from '@/core/actions/movies/upcoming.action';

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

  const topRatedQuery = useQuery({
    queryKey: ['movies', 'topRated'],
    queryFn: topRatedAction,
    staleTime: 86400000, // 24 hours -> 1000 * 60 * 60 * 24
  });

  const upcomingQuery = useQuery({
    queryKey: ['movies', 'upcoming'],
    queryFn: upcomingAction,
    staleTime: 86400000, // 24 hours -> 1000 * 60 * 60 * 24
  });

  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery,
  };
};
