import { useQuery } from '@tanstack/react-query';

import { detailsAction } from '@/core/actions/movies/details.action';

export const useMovie = (id: number) => {
  // Queries
  const detailsQuery = useQuery({
    queryKey: ['movies', 'details', id],
    queryFn: () => detailsAction(id),
    staleTime: 86400000, // 24 hours -> 1000 * 60 * 60 * 24
  });

  return {
    detailsQuery,
  };
};
