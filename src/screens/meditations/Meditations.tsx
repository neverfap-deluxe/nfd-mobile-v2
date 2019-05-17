import React from 'react';
import { ContentList } from '../content/ContentList';

export const MeditationsScreen = ({ componentId, contentType }: any) => {
  return <ContentList componentId={componentId} contentType={contentType} />;
};

MeditationsScreen.options = {
  topBar: {
    title: {
      text: 'Meditations',
    },
  },
};
