import { Image, Pressable, Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

interface Props {
  image: string;
  orginalTitle: string;
  title: string;
  screenHeight: number;
  onLoad?: () => void;
}

const MovieHeader = ({
  image,
  orginalTitle,
  screenHeight,
  title,
  onLoad,
}: Props) => {
  
  return (
    <>
      <View
        style={{
          position: 'absolute',
          zIndex: 99,
          elevation: 9,
          top: 35,
          left: 10,
        }}
      >
        <Pressable onPress={() => router.dismiss()} className='p-2'>
          <Ionicons
            name='arrow-back'
            size={30}
            color='white'
            className='shadow'
          />
        </Pressable>
      </View>

      <View
        className='shadow-xl shadow-black/20'
        style={{ height: screenHeight * 0.7 }}
      >
        <View className='flex-1 rounded-b-[25px] overflow-hidden'>
          <Image
            source={{ uri: image }}
            resizeMode='cover'
            className='flex-1'
            onLoad={onLoad}
          />
        </View>

        <View className='px-5 mt-5'>
          <Text className='font-normal'>{orginalTitle}</Text>
          <Text className='font-semibold text-2xl'>{title}</Text>
        </View>
      </View>
    </>
  );
};

export default MovieHeader;
