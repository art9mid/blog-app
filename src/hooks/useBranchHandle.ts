import { useEffect } from 'react';
import branch from 'react-native-branch';

import { ContentType } from '../utils/generateContentLink';
import { useDynamicNavigation } from './useAppNavigation';

export const useBranchHandle = () => {
  const navigation = useDynamicNavigation();
  useEffect(() => {
    const unsubscribe = branch.subscribe(async ({ error, params }) => {
      if (error) {
        console.log('Branch error ', String(error));
        return;
      }

      if (params) {
        console.log('Branch params:', params);
        if (!params) {
          return;
        }

        const contentId = params?.contentId as string;
        const contentType = params?.contentType as ContentType;

        if (contentId && contentType) {
          if (contentType === 'posts') {
            navigation.navigate('HomeStack', {
              screen: `PostDetailsScreen`,
              params: { postId: contentId },
            });
          }
        }
      }
    });
    return () => unsubscribe();
  }, []);
};
