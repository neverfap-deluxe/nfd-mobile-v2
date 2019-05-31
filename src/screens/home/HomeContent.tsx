import React from 'react';
import { FlatList } from 'react-native';

import { LatestContent } from '../../emotion/componentStyles';
import { PageSubTitle } from '../../emotion/textStyles';

import { ContentListItem } from '../contentText/ContentListItem';

import articlesLatestJSON from '../../content/api/articlesLatest';
import practicesLatestJSON from '../../content/api/practicesLatest';
// import podcastsLatestJSON from '../content/api/podcastsLatest';
// import meditationsJSON from '../content/api/meditations';

export const HomeContent = ({ componentId }: any) => {
  return (
    <React.Fragment>
      <PageSubTitle>Latest Articles</PageSubTitle>
      <LatestContent>
        <FlatList
          data={articlesLatestJSON}
          renderItem={({ item }) => (
            <ContentListItem
              key={item.title}
              item={item}
              contentType={'articles'}
              componentId={componentId}
              contentCategory={'Articles'}
            />
          )}
          keyExtractor={(item: any, index: any) => item.title + index}
        />
      </LatestContent>

      <PageSubTitle>Latest Practices</PageSubTitle>
      <LatestContent>
        <FlatList
          data={practicesLatestJSON}
          renderItem={({ item }) => (
            <ContentListItem
              key={item.title}
              item={item}
              contentType={'practices'}
              componentId={componentId}
              contentCategory={'Practices'}
            />
          )}
          keyExtractor={(item: any, index: any) => item.title + index}
        />
      </LatestContent>
    </React.Fragment>
  );
};

