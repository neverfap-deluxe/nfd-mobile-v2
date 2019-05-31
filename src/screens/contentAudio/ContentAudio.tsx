import React from 'react';

import Meditations from '../../content/meditations';
import Podcasts from '../../content/podcasts';

export const ContentAudioScreen = ({
  componentId,
  contentType,
  properTitle,
}: any) => {
  const selectContent = (contentType: string, properTitle: string) => {
    switch (contentType) {
      case 'meditations':
        return Meditations[properTitle];
      case 'podcasts':
        return Podcasts[properTitle];
      default:
        null;
    }
  };

  const Content = selectContent(contentType, properTitle);

  return <Content />;
};

