import React from 'react';
import { ContentList } from '../contentText/ContentList';

export const PracticesScreen = ({ componentId, contentType }: any) => {
  return <ContentList componentId={componentId} contentType={contentType} />;
};

PracticesScreen.options = {
  topBar: {
    title: {
      text: 'Practices',
    },
  },
};
