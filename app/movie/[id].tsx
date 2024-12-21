import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { useMovie } from '@/presentation/hooks/useMovie';

const MovieScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { detailsQuery } = useMovie(+id);

  if (detailsQuery.isLoading) {
    return (
      <View className='flex gap-4 flex-1 justify-center items-center'>
        <Text>Espere por favor</Text>
        <ActivityIndicator color='purple' size={30} />
      </View>
    );
  }

  return (
    <ScrollView>
      <Text>{detailsQuery.data?.title}</Text>
    </ScrollView>
  );
};

export default MovieScreen;
