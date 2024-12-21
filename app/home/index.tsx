import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useMovies } from '@/presentation/hooks/useMovies';
import { MainSlideShow } from '@/presentation/components';
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList';

const HomeScreen = () => {
    const safeArea = useSafeAreaInsets();
  
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className='flex-1 justify-center items-center'>
        <ActivityIndicator size={30} />
      </View>
    );
  }

  return (
    <ScrollView className='flex-1' style={{ paddingTop: safeArea.top}}>
      <View className='flex-1 pt-2 mb-3 bg-slate-50'>
        <Text className='text-3xl font-bold px-4 mb-2 color-slate-800'>
          Movies App
        </Text>
        <MainSlideShow movies={nowPlayingQuery.data ?? []} />

        <View className='gap-5'>
          {/* Popular movies */}
          <MovieHorizontalList
            title='Populares'
            movies={popularQuery.data ?? []}
          />

          {/* Top rated movies */}
          <MovieHorizontalList
            title='Mejor calificadas'
            movies={topRatedQuery.data?.pages.flat() ?? []}
            loadNextPage={topRatedQuery.fetchNextPage}
          />

          {/* Upcoming movies */}
          <MovieHorizontalList
            title='Próximanente en cines'
            movies={upcomingQuery.data ?? []}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
