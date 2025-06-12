import { StyleSheet } from 'react-native';
import type { EdgeInsets } from 'react-native-safe-area-context/src/SafeArea.types';
import { moderateScale } from 'react-native-size-matters';

import { AppTheme } from '../../../theme/interfaces';

export const postDetailsScreenStyles = (
  theme: AppTheme,
  { bottom, top }: EdgeInsets,
) =>
  StyleSheet.create({
    header: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 2,
      width: '100%',
      paddingTop: top + theme.sizes.paddingVertical,
      paddingHorizontal: theme.sizes.paddingHorizontal,
      overflow: 'hidden',
      borderBottomWidth: moderateScale(1),
    },
    headerContentContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: theme.sizes.navigationHeaderHeight,
    },
    headerTitle: {
      position: 'absolute',
      left: moderateScale(60),
      right: moderateScale(60),
      fontSize: moderateScale(16),
      ...theme.fonts.bold,
      color: theme.colors.text,
      textAlign: 'center',
      transform: [{ translateY: -moderateScale(10) }],
    },
    headerButton: {
      height: moderateScale(40),
      width: moderateScale(40),
      paddingHorizontal: 0,
    },
    container: {
      paddingBottom: bottom + theme.sizes.paddingVertical,
    },
    loadingScrollView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    previewContainer: {
      position: 'relative',
      height: theme.sizes.postPreviewHeight,
    },
    previewGradient: {
      ...StyleSheet.absoluteFillObject,
      width: '100%',
      height: '100%',
      zIndex: 1,
    },
    previewImage: {
      width: '100%',
      height: '100%',
    },
    contentContainer: {
      marginTop: moderateScale(-40),
      paddingHorizontal: theme.sizes.paddingHorizontal,
    },
    title: {
      fontSize: moderateScale(24),
      ...theme.fonts.heavy,
    },
    date: {
      marginTop: moderateScale(6),
      fontSize: moderateScale(12),
      color: theme.colors.textColours.text20,
    },
  });
