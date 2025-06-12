import React, { FC } from 'react';
import { View } from 'react-native';

import { AppImage, AppText } from '../../../../../../../components/ui';
import { useThemedStyles } from '../../../../../../../hooks/useThemedStyles';
import { imageBlockStyles } from './styles';
import Lightbox from 'react-native-lightbox-v2';

interface ImageBlockProps {
  url: string;
  blurhash?: string;
  caption?: string;
}

export const ImageBlock: FC<ImageBlockProps> = ({ url, blurhash, caption }) => {
  const { styles } = useThemedStyles(imageBlockStyles);

  return (
    <View style={styles.container}>
      <Lightbox underlayColor="inherit">
        <AppImage
          source={{ uri: url }}
          placeholder={{ blurhash }}
          style={styles.image}
          contentFit="contain"
        />
      </Lightbox>
      {!!caption && <AppText style={styles.caption}>{caption}</AppText>}
    </View>
  );
};

export default ImageBlock;
