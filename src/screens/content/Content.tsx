import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Container } from '../../emotion/components';

// import { TopBarMain } from '../topbar/TopBarMain';

import Articles from '../../content/articles';
import Practices from '../../content/practices';
// import Podcasts from '../content/other';
// import Podcasts from '../content/podcasts';


export const ContentScreen = ({ componentId, contentType, contentTitle }: any) => {
  const selectContent = (contentType: string, contentTitle: string) => {
    switch (contentType) {
      case 'articles': return Articles[contentTitle];
      case 'practices': return Practices[contentTitle];
      // case 'podcasts': return Podcasts[contentTitle];
      // case 'meditations': return meditationsJSON[contentTitle];
      // case 'other': return otherJSON[contentTitle];
      default: null;
    }
  }

  return (
    <ScrollView>
      <Container>
        {/* <TopBarMain/> */}
        {selectContent(contentType, contentTitle)}
      </Container>
    </ScrollView>
  );
}
