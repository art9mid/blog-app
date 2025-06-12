import React, { FC } from 'react';
import Toast from 'react-native-simple-toast';
import { TouchableOpacity, View } from 'react-native';
// @ts-ignore
import CodeHighlighter from 'react-native-code-highlighter';
import { moderateScale } from 'react-native-size-matters';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { MaterialIcons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';

import { AppText } from '../../../../../../../components/ui';
import { useThemedStyles } from '../../../../../../../hooks/useThemedStyles';
import { codeBlockStyles } from './styles';

interface CodeBlockProps {
  code: string;
  language: string;
  path?: string;
}

export const CodeBlock: FC<CodeBlockProps> = ({ code, language, path }) => {
  const { styles, theme } = useThemedStyles(codeBlockStyles);

  const handleCopy = async () => {
    Toast.show(
      'Copied!',
      1000,
    );
    await Clipboard.setStringAsync(code);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppText style={styles.language}>{path || language}</AppText>
        <TouchableOpacity hitSlop={moderateScale(12)} onPress={handleCopy}>
          <MaterialIcons
            name={'content-copy'}
            size={moderateScale(18)}
            color={theme.colors.textColours.text10}
          />
        </TouchableOpacity>
      </View>

      <CodeHighlighter
        language={language}
        hljsStyle={atomOneDarkReasonable}
        highlighter={'prism'}
        scrollViewProps={{
          contentContainerStyle: styles.codeHighlighterContentContainer,
          style: {
            backgroundColor: theme.colors.backgroundColours.bg30,
          },
        }}
      >
        {code}
      </CodeHighlighter>
    </View>
  );
};

export default CodeBlock;
