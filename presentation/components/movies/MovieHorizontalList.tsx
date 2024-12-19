import { useEffect, useRef } from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from 'react-native';

import type { Movie } from '@/infrastructure/interfaces';
import MoviePoster from './MoviePoster';

interface Props {
  movies: Movie[];
  title?: string;

  loadNextPage?: () => void;
}

const MovieHorizontalList = ({ movies, title, loadNextPage }: Props) => {
  const isLoading = useRef(false);
  let timeout: NodeJS.Timeout;

  useEffect(() => {
    timeout = setTimeout(() => {
      isLoading.current = false;
    }, 200);

    return () => {
      clearTimeout(timeout);
    };
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;

    /**
     * The calculation adds the current horizontal scroll position (contentOffset.x)
     * to the width of the visible area (layoutMeasurement.width) and adds a 600 pixel offset.
     * If this sum is greater than or equal to the total width of the content (contentSize.width),
     * it means that the end of the list has been reached or is close to being reached.
     */
    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndReached) return;

    isLoading.current = true;

    console.log('load the folowing movies');
    loadNextPage?.();
  };

  return (
    <View>
      {title && <Text className='text-3xl font-bold px-4 mb-2'>{title}</Text>}

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={(item, index) => `${item.id} - ${index}`}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
        onScroll={onScroll}
      />
    </View>
  );
};

export default MovieHorizontalList;
