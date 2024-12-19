import { View, Text, ActivityIndicator } from 'react-native';

import { useMovies } from '@/presentation/hooks/useMovies';
import { MainSlideShow } from '@/presentation/components';
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList';

const HomeScreen = () => {
  const { nowPlayingQuery, popularQuery } = useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className='flex-1 justify-center items-center'>
        <ActivityIndicator size={30} />
      </View>
    );
  }

  return (
    <View className='flex-1 pt-2 bg-slate-50'>
      <Text className='text-3xl font-bold px-4 mb-2 color-slate-800'>
        Movies App
      </Text>
      <MainSlideShow movies={nowPlayingQuery.data ?? []} />

      {/* Popular movies */}
      <MovieHorizontalList title='Populares' movies={popularQuery.data ?? []} />
    </View>
  );
};

export default HomeScreen;
