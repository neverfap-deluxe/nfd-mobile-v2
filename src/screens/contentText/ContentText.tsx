import React from 'react';

import Articles from '../../content/articles';
import Practices from '../../content/practices';

export const ContentTextScreen = ({
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
      default:
        null;
    }
  };

  const Content = selectContent(contentType, properTitle);

  return <Content />;
};
