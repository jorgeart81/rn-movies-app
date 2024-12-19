import { View, Text, FlatList } from 'react-native';

import type { Movie } from '@/infrastructure/interfaces';
import MoviePoster from './MoviePoster';

interface Props {
  movies: Movie[];
  title?: string;
}

const MovieHorizontalList = ({ movies, title }: Props) => {
  return (
    <View>
      {title && <Text className='text-3xl font-bold px-4 mb-2'>{title}</Text>}

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
      />
    </View>
  );
};

export default MovieHorizontalList;
