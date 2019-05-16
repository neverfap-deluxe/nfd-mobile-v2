import React from 'react';
import { ContentList } from '../content/ContentList';

export const MoreScreen = ({ componentId, contentType }: any) => {
  return <ContentList componentId={componentId} contentType={contentType} />;
};

MoreScreen.options = {
  topBar: {
    title: {
      text: 'More',
    },
  },
};
