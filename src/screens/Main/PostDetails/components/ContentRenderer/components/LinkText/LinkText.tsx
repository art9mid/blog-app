import React, { FC } from 'react';
import { Linking } from 'react-native';
import { AppText } from '../../../../../../../components/ui';
import { useThemedStyles } from '../../../../../../../hooks/useThemedStyles';
import { linkTextStyles } from './styles';

interface LinkTextProps {
  text: string;
}

const LINK_REGEX = /<a\s+([^>]*?)href=(["'])(.*?)\2[^>]*>([\s\S]*?)<\/a>/gi;
const CODE_REGEX = /<code>([\s\S]*?)<\/code>/gi;
const BR_REGEX = /<br\s*\/?>/gi;

export const LinkText: FC<LinkTextProps> = ({ text }) => {
  const { styles } = useThemedStyles(linkTextStyles);

  const processText = (input: string) => {
    const parts: Array<{ type: 'text' | 'link' | 'code' | 'br'; value?: string; url?: string }> = [];
    let remainingText = input;

    const linkMatches = [...remainingText.matchAll(LINK_REGEX)];
    if (linkMatches.length > 0) {
      linkMatches.forEach((match) => {
        const [fullMatch, , , url, content] = match;
        const splitIndex = remainingText.indexOf(fullMatch);

        if (splitIndex > 0) {
          parts.push({
            type: 'text',
            value: remainingText.slice(0, splitIndex)
          });
        }

        parts.push({
          type: 'link',
          value: content.replace(/\n/g, ' ').trim(),
          url
        });

        remainingText = remainingText.slice(splitIndex + fullMatch.length);
      });
    }

    const codeMatches = [...remainingText.matchAll(CODE_REGEX)];
    if (codeMatches.length > 0) {
      codeMatches.forEach((match) => {
        const [fullMatch, content] = match;
        const splitIndex = remainingText.indexOf(fullMatch);

        if (splitIndex > 0) {
          parts.push({
            type: 'text',
            value: remainingText.slice(0, splitIndex)
          });
        }

        parts.push({
          type: 'code',
          value: content
        });

        remainingText = remainingText.slice(splitIndex + fullMatch.length);
      });
    }

    const brMatches = [...remainingText.matchAll(BR_REGEX)];
    if (brMatches.length > 0) {
      brMatches.forEach((match) => {
        const [fullMatch] = match;
        const splitIndex = remainingText.indexOf(fullMatch);

        if (splitIndex > 0) {
          parts.push({
            type: 'text',
            value: remainingText.slice(0, splitIndex)
          });
        }

        parts.push({ type: 'br' });
        remainingText = remainingText.slice(splitIndex + fullMatch.length);
      });
    }

    if (remainingText.length > 0) {
      parts.push({ type: 'text', value: remainingText });
    }

    return parts;
  };

  return (
    <AppText style={styles.text} selectable>
      {processText(text).map((part, i) => {
        if (part.type === 'link' && part.url) {
          return (
            <AppText
              key={i}
              style={styles.link}
              onPress={() => Linking.openURL(part.url)}>
              {part.value}
            </AppText>
          );
        }

        if (part.type === 'code') {
          return (
            <AppText key={i} style={styles.code}>
              {part.value}
            </AppText>
          );
        }

        if (part.type === 'br') {
          return <AppText key={i}>{'\n'}</AppText>;
        }

        const decodedText = part.value
          ?.replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&amp;/g, '&')
          .replace(/&#x200B;/g, '');

        return <AppText key={i}>{decodedText}</AppText>;
      })}
    </AppText>
  );
};

export default LinkText;
