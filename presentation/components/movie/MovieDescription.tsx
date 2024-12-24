import { View, Text, FlatList } from 'react-native';

import { Formatter } from '@/config/helpers/formatters';
import { CompleteMovie } from '@/infrastructure/interfaces';
import { useMovie } from '@/presentation/hooks/useMovie';
import MoviePoster from '../movies/MoviePoster';

interface Props {
  movie: CompleteMovie;
}

const MovieDescription = ({ movie }: Props) => {
  const { creditsQuery } = useMovie(movie.id);

  return (
    <View className='mx-5'>
      <View className='flex flex-row'>
        <Text>{movie.rating}</Text>
        <Text> - {movie.genres.join(', ')}</Text>
      </View>

      <Text className='font-bold mt-5'>Historia</Text>
      <Text className='font-normal mt-2'>{movie.description}</Text>

      <Text className='text-2xl font-bold mt-2'>
        {Formatter.currency(movie.budget)}
      </Text>

      <Text className='font-bold mt-5'>Actores</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={creditsQuery.data}
        keyExtractor={(item, index) => `${item.id} - ${index}`}
        renderItem={({ item }) => (
          <View className='flex gap-2'>
            <MoviePoster id={item.id} poster={item.avatar} smallPoster />
            {Formatter.splitName(item.name).map((value) => (
              <Text className='font-bold mx-2'>{value}</Text>
            ))}
            {Formatter.splitName(item.character).map((value) => (
              <Text className='font-normal mx-2'>{value}</Text>
            ))}
          </View>
        )}
      />
    </View>
  );
};

export default MovieDescription;
