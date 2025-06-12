import React, { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { WebView as WebViewBase } from 'react-native-webview';

import BaseNavigationHeader from '../../../components/ui/BaseNavigationHeader/BaseNavigationHeader';
import {
  useDynamicNavigation,
  useDynamicParams,
} from '../../../hooks/useAppNavigation';
import { useThemedStyles } from '../../../hooks/useThemedStyles';
import { webViewStyles } from './styles';

const WebView = () => {
  const router = useDynamicParams<'WebViewScreen'>();
  const { styles } = useThemedStyles(webViewStyles);
  const navigation = useDynamicNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: router!.headerTitle,
    });
  }, [navigation, router!.headerTitle]);

  const injectedJavaScript = `
    window.ReactNativeWebView.postMessage('pageLoaded');
    true;
  `;

  return (
    <>
      <BaseNavigationHeader title={router!.headerTitle} showCloseIcon />
      <WebViewBase
        style={styles.container}
        nestedScrollEnabled
        startInLoadingState={true}
        renderLoading={() => (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size={'large'} />
          </View>
        )}
        renderError={(errorName) => (
          <Text style={styles.infoText}>{errorName}</Text>
        )}
        source={{ uri: router!.url }}
        injectedJavaScript={injectedJavaScript}
      />
    </>
  );
};

export default WebView;
