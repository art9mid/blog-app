import React from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, Share, View } from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';
import { moderateScale } from 'react-native-size-matters';
import { Feather } from '@expo/vector-icons';
import dayjs from 'dayjs';
import { LinearGradient } from 'expo-linear-gradient';

import { AppButton, AppImage, AppText } from '../../../components/ui';
import {
  useDynamicNavigation,
  useDynamicParams,
} from '../../../hooks/useAppNavigation';
import { useThemedStyles } from '../../../hooks/useThemedStyles';
import { usePostDetails } from '../../../store/services/post';
import { generateContentLink } from '../../../utils/generateContentLink';
import ContentRenderer from './components/ContentRenderer/ContentRenderer';
import { postDetailsScreenStyles } from './styles';

const PostDetails = () => {
  const { t } = useTranslation('postDetailsScreen');
  const navigation = useDynamicNavigation();
  const { styles, theme } = useThemedStyles(postDetailsScreenStyles);
  const params = useDynamicParams<'PostDetailsScreen'>();
  const { data: post, isLoading: postLoading } = usePostDetails(params!.postId);

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const handleSharePost = async () => {
    const link = await generateContentLink({
      webUrl: `/post/${params!.postId}`,
      contentType: 'posts',
      contentId: params!.postId,
      contentDescription: post!.title,
    });
    await Share.share({
      title: post!.title,
      message: `${post!.title}\n\n${link}`,
      url: link,
    });
  };

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-theme.sizes.postPreviewHeight, 0, theme.sizes.postPreviewHeight],
            [
              -theme.sizes.postPreviewHeight / 2,
              0,
              theme.sizes.postPreviewHeight * 0.75,
            ],
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-theme.sizes.postPreviewHeight, 0, theme.sizes.postPreviewHeight],
            [2, 1, 1],
          ),
        },
      ],
    };
  });

  const headerAnimatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      scrollOffset.value,
      [0, theme.sizes.postPreviewHeight],
      ['transparent', theme.colors.background],
    );
    const borderBottomColor = interpolateColor(
      scrollOffset.value,
      [0, theme.sizes.postPreviewHeight],
      ['transparent', theme.colors.border],
    );

    return {
      backgroundColor,
      borderBottomColor,
    };
  });

  const titleAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollOffset.value,
      [0, theme.sizes.postPreviewHeight * 0.5],
      [0, 1],
      { extrapolateRight: 'clamp' },
    );

    const translateY = interpolate(
      scrollOffset.value,
      [0, theme.sizes.postPreviewHeight],
      [25, 0],
      { extrapolateRight: 'clamp' },
    );

    return {
      opacity,
      transform: [{ translateY }],
    };
  });

  return (
    <>
      <Animated.View style={[styles.header, headerAnimatedStyle]}>
        <View style={styles.headerContentContainer}>
          <AppButton
            onPress={navigation.goBack}
            size={'small'}
            skin={'grey'}
            style={styles.headerButton}
          >
            <Feather
              name={'chevron-left'}
              size={moderateScale(24)}
              color={theme.colors.textColours.text10}
            />
          </AppButton>

          <Animated.Text
            style={[styles.headerTitle, titleAnimatedStyle]}
            numberOfLines={1}
          >
            {post?.title}
          </Animated.Text>

          <AppButton
            hitSlop={moderateScale(12)}
            onPress={handleSharePost}
            size={'small'}
            skin={'grey'}
            style={styles.headerButton}
          >
            <Feather
              name={'share'}
              size={moderateScale(18)}
              color={theme.colors.textColours.text10}
            />
          </AppButton>
        </View>
      </Animated.View>
      <Animated.ScrollView
        contentContainerStyle={[
          styles.container,
          (postLoading || !post) && styles.loadingScrollView,
        ]}
        ref={scrollRef}
        scrollEventThrottle={16}
      >
        {postLoading || !post ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <>
            <View style={styles.previewContainer}>
              <Animated.View style={imageAnimatedStyle}>
                <AppImage
                  placeholder={{ blurhash: post!.preview.blurhash }}
                  source={{ uri: post!.preview.url }}
                  contentFit={'cover'}
                  style={styles.previewImage}
                />
                <LinearGradient
                  colors={['rgba(0,0,0,0)', theme.colors.background]}
                  style={styles.previewGradient}
                />
              </Animated.View>
            </View>
            <View style={styles.contentContainer}>
              <AppText style={styles.title}>{post.title}</AppText>
              <AppText style={styles.date}>
                {t('postedAt')} {dayjs(post.created_at).format('MMM DD, YYYY')}
              </AppText>
            </View>
            <ContentRenderer content={post.content} />
          </>
        )}
      </Animated.ScrollView>
    </>
  );
};

export default PostDetails;
