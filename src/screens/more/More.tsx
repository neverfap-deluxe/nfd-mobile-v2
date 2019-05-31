import React from 'react';
import { ScrollView, FlatList } from 'react-native';

import { Container } from '../../emotion/componentStyles';
import { PageTitle } from '../../emotion/textStyles';

import { TopBarMain } from '../topbar/TopBarMain';
import { ContentListItem } from '../contentText/ContentListItem';

import otherJSON from '../../content/api/other';
import linksJSON from '../../content/api/links';


export const MoreScreen = ({ componentId, contentType }: any) => {
  return (
    <ScrollView>
      <Container>
        <TopBarMain />
        {/* <PageTitle>{'More'}</PageTitle>
        <FlatList
          data={otherJSON}
          renderItem={({ item }) => (
            <ContentListItem
              key={item.title}
              item={item}
              contentType={contentType || 'other'}
              componentId={componentId}
              contentCategory={'More'}
            />
          )}
          keyExtractor={(item, index) => item.title + index}
        /> */}
        <PageTitle>{'Links'}</PageTitle>
        <FlatList
          data={linksJSON}
          renderItem={({ item }) => (
            <ContentListItem
              key={item.title}
              item={item}
              contentType={contentType || 'other'}
              componentId={componentId}
              contentCategory={'More'}
            />
          )}
          keyExtractor={(item, index) => item.title + index}
        />
      </Container>
    </ScrollView>
  );
};

MoreScreen.options = {
  topBar: {
    title: {
      text: 'More',
    },
  },
};
