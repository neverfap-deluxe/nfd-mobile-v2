import React from 'react';
import { LatestContent } from '../../emotion/componentStyles';
import { PageSubTitle } from '../../emotion/textStyles';

import { ContentListItem } from '../content/ContentListItem';

import articlesLatestJSON from '../../content/api/articlesLatest';
import practicesLatestJSON from '../../content/api/practicesLatest';
// import podcastsLatestJSON from '../content/api/podcastsLatest';
// import meditationsJSON from '../content/api/meditations';

export const HomeContent = ({ componentId }: any) => {
  return (
    <React.Fragment>
      <PageSubTitle>Latest Articles</PageSubTitle>
      <LatestContent>
        {articlesLatestJSON.map((item: any) => (
          <ContentListItem
            key={item.title}
            item={item}
            contentType="articles"
            componentId={componentId}
          />
        ))}
      </LatestContent>

      <PageSubTitle>Latest Practices</PageSubTitle>
      <LatestContent>
        {practicesLatestJSON.map((item: any) => (
          <ContentListItem
            key={item.title}
            item={item}
            contentType="practices"
            componentId={componentId}
          />
        ))}
      </LatestContent>
    </React.Fragment>
  );
};

