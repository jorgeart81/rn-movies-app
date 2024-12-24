import { useLocalSearchParams } from 'expo-router';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

import MovieHeader from '@/presentation/components/movie/MovieHeader';
import { useMovie } from '@/presentation/hooks/useMovie';
import MovieDescription from '@/presentation/components/movie/MovieDescription';

const MovieScreen = () => {
  const { height: screenHeight } = useWindowDimensions();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { detailsQuery } = useMovie(+id);

  if (detailsQuery.isLoading || !detailsQuery.data) {
    return (
      <View className='flex gap-4 flex-1 justify-center items-center'>
        <Text>Espere por favor</Text>
        <ActivityIndicator color='purple' size={30} />
      </View>
    );
  }

  const { poster, title, originalTitle } = detailsQuery.data;
  return (
    <ScrollView className='mb-5'>
      <MovieHeader
        image={poster}
        title={title}
        orginalTitle={originalTitle}
        screenHeight={screenHeight}
      />
      <MovieDescription movie={detailsQuery.data} />
    </ScrollView>
  );
};

export default MovieScreen;
