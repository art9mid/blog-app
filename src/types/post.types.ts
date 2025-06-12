export type ContentItem =
  | {
      type: 'text';
      value: string;
    }
  | {
      type: 'code';
      code: string;
      language: string;
      path?: string;
    }
  | {
      type: 'image';
      preview: {
        url: string;
        blurhash?: string;
      };
      caption?: string;
    }
  | {
      type: 'orderedList';
      items: string[];
    }
  | {
      type: 'unorderedList';
      items: string[];
    }
  | {
      type: 'sectionHeader';
      title: string;
    };

export interface Post {
  id: string;
  created_at: string;
  title: string;
  tags: string[];
  preview: {
    url: string;
    blurhash?: string;
  };
}

export interface PostWithContent extends Post {
  content: ContentItem[];
}

export interface Category {
  id: string;
  title: string;
  key: string;
}
