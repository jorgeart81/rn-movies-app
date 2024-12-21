import { router } from 'expo-router';
import { Image, Pressable } from 'react-native';

interface Props {
  className?: string;
  id: number;
  poster: string;
  smallPoster?: boolean;
}

const size = {
  small: { width: 85, height: 130 },
  regular: { width: 150, height: 250 },
};

const MoviePoster = ({ className, id, poster, smallPoster = false }: Props) => {
  const posterSize: keyof typeof size = smallPoster ? 'small' : 'regular';

  return (
    <Pressable
      onPress={() => router.push(`/movie/${id}`)}
      className={`active:opacity-90 px-2 ${className}`}
    >
      <Image
        source={{ uri: poster }}
        className='shadow-lg rounded-2xl w-full h-full'
        style={{
          width: size[posterSize].width,
          height: size[posterSize].height,
        }}
        resizeMode='cover'
      />
    </Pressable>
  );
};

export default MoviePoster;
