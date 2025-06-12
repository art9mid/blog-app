import branch, {
  BranchLinkControlParams,
  BranchLinkProperties,
} from 'react-native-branch';

export type ContentType = 'posts';
export type ShareLinkParams = {
  webUrl: string;
  contentType: ContentType;
  contentId: string;
  contentDescription?: string;
};

export const generateContentLink = async ({
  webUrl,
  contentType,
  contentId,
  contentDescription,
}: ShareLinkParams): Promise<string> => {
  try {
    const buo = await branch.createBranchUniversalObject(
      `${contentType}/${contentId}`,
      {
        title: 'ADO Solutions',
        contentDescription: contentDescription,
        contentMetadata: {
          customMetadata: {
            contentType,
            contentId,
          },
        },
      },
    );

    const branchLinkProperties: BranchLinkProperties = {
      feature: 'share',
      channel: 'mobile_app',
      campaign: `${contentType}_share`,
    };

    const linkParams: BranchLinkControlParams = {
      $desktop_url: `${process.env.EXPO_PUBLIC_WEB_URL}${webUrl}`,
      $ios_url: `${process.env.EXPO_PUBLIC_WEB_URL}${webUrl}`,
      $android_url:
        'https://play.google.com/store/apps/details?id=',
    };

    const { url } = await buo.generateShortUrl(
      branchLinkProperties,
      linkParams,
    );
    return url;
  } catch (error) {
    console.error('Link generation failed:', error);
    return `${process.env.EXPO_PUBLIC_WEB_URL}/${webUrl}`;
  }
};
