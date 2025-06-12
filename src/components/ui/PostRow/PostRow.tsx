import { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import dayjs from 'dayjs';

import { useDynamicNavigation } from '../../../hooks/useAppNavigation';
import { useThemedStyles } from '../../../hooks/useThemedStyles';
import { Post } from '../../../types/post.types';
import AppText from '../AppText/AppText';
import { AppImage } from '../index';
import { homeStyles } from './styles';

interface PostRowProps {
  data: Post;
}

const PostRow: FC<PostRowProps> = ({ data }) => {
  const { styles, theme } = useThemedStyles(homeStyles);
  const navigation = useDynamicNavigation();

  const handleNavigateToPostScreen = () => {
    navigation.navigate('HomeStack', {
      screen: 'PostDetailsScreen',
      params: {
        postId: data.id,
      },
    });
  };

  return (
    <TouchableOpacity
      onPress={handleNavigateToPostScreen}
      hitSlop={{
        top: moderateScale(8),
        left: theme.sizes.paddingHorizontal,
        right: theme.sizes.paddingHorizontal,
      }}
      style={styles.container}
    >
      <AppImage
        style={styles.preview}
        placeholder={{ blurhash: data.preview.blurhash }}
        source={{ uri: data.preview.url }}
      />
      <View style={styles.content}>
        <AppText style={styles.tags}>{data.tags.join(', ')}</AppText>
        <AppText style={styles.title}>{data.title}</AppText>
        <AppText style={styles.date}>
          {dayjs(data.created_at).format('MMM DD, YYYY')}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};

export default PostRow;
