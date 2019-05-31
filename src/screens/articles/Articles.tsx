import React from 'react';
import { ContentList } from '../contentText/ContentList';

export const ArticlesScreen = ({ componentId, contentType }: any) => {
  return <ContentList componentId={componentId} contentType={contentType} />;
};

ArticlesScreen.options = {
  topBar: {
    title: {
      text: 'Articles',
    },
  },
};
