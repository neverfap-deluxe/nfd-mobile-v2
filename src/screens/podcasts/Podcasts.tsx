import React from 'react';
import { ContentList } from '../content/ContentList';

export const PodcastsScreen = ({ componentId, contentType }: any) => {
  return <ContentList componentId={componentId} contentType={contentType} />;
};

PodcastsScreen.options = {
  topBar: {
    title: {
      text: 'Podcasts',
    },
  },
};
