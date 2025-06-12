import React from 'react';
import { ImageRequireSource } from 'react-native';
import { Image, ImageProps, ImageSource } from 'expo-image';

import { useThemedStyles } from '../../../hooks/useThemedStyles';
import { appImageStyles } from './styles';

interface AppImageProps extends ImageProps {
  errorSource?: ImageSource | ImageRequireSource;
}

const AppImage = (props: AppImageProps) => {
  const { styles } = useThemedStyles(appImageStyles);
  const {
    errorSource = {
      uri: 'https://developers.google.com/static/maps/documentation/streetview/images/error-image-generic.png',
    },
  } = props;

  const [currentSource, setCurrentSource] = React.useState<
    ImageSource | ImageRequireSource
  >(props.source || errorSource);

  React.useEffect(() => {
    if (props.source) {
      setCurrentSource(props.source);
    } else {
      setCurrentSource(errorSource);
    }
  }, [props.source, errorSource]);

  const handleError = () => {
    if (currentSource !== errorSource) {
      setCurrentSource(errorSource);
    }
  };

  return (
    <Image
      contentFit="cover"
      transition={300}
      style={[styles.image, props.style]}
      {...props}
      source={currentSource}
      onError={handleError}
    />
  );
};

export default AppImage;
