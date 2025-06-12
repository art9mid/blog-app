import { Dimensions, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { AppTheme } from '../../../theme/interfaces';

const CARD_HEIGHT = moderateScale(Dimensions.get('window').width / 1.8);
const GALLERY_GAP = moderateScale(18);
const LINEAR_GRADIENT_HEIGHT = moderateScale(180);

export const welcomeAuthStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: theme.sizes.paddingVertical,
      backgroundColor: theme.colors.background,
    },
    contentContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      width: '100%',
      marginTop: moderateScale(-LINEAR_GRADIENT_HEIGHT),
    },
    content: {
      paddingBottom: theme.sizes.paddingVertical,
      paddingTop: moderateScale(44),
      backgroundColor: theme.colors.background,
    },
    linearGradient: {
      width: '100%',
      height: moderateScale(LINEAR_GRADIENT_HEIGHT),
    },
    title: {
      fontSize: moderateScale(28),
      marginBottom: moderateScale(12),
      textAlign: 'center',
      ...theme.fonts.heavy,
    },
    subtitle: {
      color: theme.colors.textColours.text20,
      fontSize: moderateScale(14),
      textAlign: 'center',
      maxWidth: moderateScale(280),
      marginHorizontal: 'auto',
    },
    buttonContainer: {
      marginTop: moderateScale(38),
      flexDirection: 'row',
      justifyContent: 'center',
    },
    button: {
      borderRadius: theme.sizes.largeHeight,
      width: theme.sizes.largeHeight,
    },
    galleryContainer: {
      paddingHorizontal: theme.sizes.paddingHorizontal,
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: GALLERY_GAP,
    },
    pictureContainer: {
      position: 'relative',
      height: CARD_HEIGHT,
      width:
        (Dimensions.get('window').width -
          theme.sizes.paddingHorizontal * 2 -
          GALLERY_GAP) /
        2,
      marginBottom: moderateScale(40),
      borderRadius: moderateScale(8),
      overflow: 'hidden',
    },
    captionContainer: {
      position: 'absolute',
      bottom: moderateScale(12),
      left: moderateScale(12),
      right: moderateScale(12),
      paddingHorizontal: moderateScale(12),
      paddingVertical: moderateScale(12),
      backgroundColor: theme.colors.background,
      borderRadius: theme.sizes.mainBorderRadius,
    },
    captionText: {
      fontSize: moderateScale(12),
      ...theme.fonts.bold,
    },
    first: {
      marginTop: moderateScale(-120),
    },
    second: {
      marginTop: moderateScale(-40),
    },
    picture: {
      width: '100%',
      height: '100%',
    },
  });
