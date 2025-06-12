import { StyleSheet } from 'react-native';

export const appImageStyles = () =>
  StyleSheet.create({
    container: {
      position: 'relative',
      overflow: 'hidden',
    },
    loading: {
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: '100%',
    },
  });
