import React, { FC } from 'react';
import { View } from 'react-native';

import { useThemedStyles } from '../../../../../hooks/useThemedStyles';
import { ContentItem } from '../../../../../types/post.types';
import CodeBlock from './components/CodeBlock/CodeBlock';
import ImageBlock from './components/ImageBlock/ImageBlock';
import LinkText from './components/LinkText/LinkText';
import OrderedList from './components/OrderedList/OrderedList';
import SectionHeader from './components/SectionHeader/SectionHeader';
import UnorderedList from './components/UnorderedList/UnorderedList';
import { contentRendererStyles } from './styles';

interface ContentRendererProps {
  content: ContentItem[];
}

const ContentRenderer: FC<ContentRendererProps> = ({ content }) => {
  const { styles } = useThemedStyles(contentRendererStyles);

  return (
    <View style={styles.container}>
      {content.map((item, index) => {
        switch (item.type) {
          case 'text':
            return <LinkText key={index} text={item.value} />;
          case 'sectionHeader':
            return <SectionHeader key={index} title={item.title} />;
          case 'code':
            return (
              <CodeBlock
                key={index}
                code={item.code}
                language={item.language}
                path={item.path}
              />
            );
          case 'image':
            return (
              <ImageBlock
                key={index}
                url={item.preview.url}
                caption={item.caption}
                blurhash={item.preview.blurhash}
              />
            );
          case 'orderedList':
            return <OrderedList key={index} items={item.items} />;
          case 'unorderedList':
            return <UnorderedList key={index} items={item.items} />;
          default:
            return null;
        }
      })}
    </View>
  );
};

export default ContentRenderer;
