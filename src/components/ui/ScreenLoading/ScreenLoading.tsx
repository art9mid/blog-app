import { ActivityIndicator, View } from 'react-native';

import { useThemedStyles } from '../../../hooks/useThemedStyles';
import { screenLoadingStyles } from './styles';

const ScreenLoading = () => {
  const { styles } = useThemedStyles(screenLoadingStyles);
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

export default ScreenLoading;
