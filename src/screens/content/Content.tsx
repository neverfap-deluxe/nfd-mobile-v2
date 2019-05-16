import React from 'react';
import { ScrollView } from 'react-native';
import { Container } from '../../emotion/componentStyles';

import Articles from '../../content/articles';
import Practices from '../../content/practices';
// import Podcasts from '../content/other';
// import Podcasts from '../content/podcasts';

export const ContentScreen = ({
  componentId,
  contentType,
  properTitle,
}: any) => {
  const selectContent = (contentType: string, properTitle: string) => {
    switch (contentType) {
      case 'articles':
        return Articles[properTitle];
      case 'practices':
        return Practices[properTitle];
      // case 'podcasts': return Podcasts[contentTitle];
      // case 'meditations': return meditationsJSON[contentTitle];
      // case 'more': return otherJSON[contentTitle];
      default:
        null;
    }
  };

  const Content = selectContent(contentType, properTitle);

  return <Content />;
};
