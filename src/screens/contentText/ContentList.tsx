import React from 'react';
import { ScrollView, FlatList } from 'react-native';

import { Container } from '../../emotion/componentStyles';
import { PageTitle } from '../../emotion/textStyles';

import { TopBarMain } from '../topbar/TopBarMain';
import { ContentListItem } from './ContentListItem';

import articlesJSON from '../../content/api/articles';
import practicesJSON from '../../content/api/practices';
import podcastsJSON from '../../content/api/podcasts';
import meditationsJSON from '../../content/api/meditations';
import otherJSON from '../../content/api/other';

export const ContentList = ({ componentId, contentType }: any) => {
  const selectTitle = (type: string): string => {
    switch (type) {
      case 'articles':
        return 'Articles';
      case 'practices':
        return 'Practices';
      case 'more':
        return 'More';
      case 'podcasts':
        return 'Podcasts';
      case 'meditations':
        return 'Meditations';
      default:
        return 'Articles';
    }
  };

  const selectJSON = (type: string): any[] => {
    switch (type) {
      case 'articles':
        return articlesJSON;
      case 'practices':
        return practicesJSON;
      case 'more':
        return otherJSON;
      case 'podcasts':
        return podcastsJSON;
      case 'meditations':
        return meditationsJSON;
      default:
        return articlesJSON;
    }
  };

  const contentCategory = selectTitle(contentType);

  return (
    <ScrollView>
      <Container>
        <TopBarMain />
        <PageTitle>{contentCategory}</PageTitle>
        <FlatList
          data={selectJSON(contentType)}
          renderItem={({ item }) => (
            <ContentListItem
              key={item.title}
              item={item}
              contentType={contentType || 'articles'}
              componentId={componentId}
              contentCategory={contentCategory}
            />
          )}
          keyExtractor={(item, index) => item.title + index}
        />
      </Container>
    </ScrollView>
  );
};
