import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Item, ItemTitle, ItemDate } from '../../emotion/components';

import {
  generateProperTitle,
  setRoot,
  pushNavigation,
  goToURL,
} from '../../navigation/util';
import { CONTENT_SCREEN } from '../pageScreens';

// setRoot(`navigation.${properTitle}Screen`)}
//
const ContentListItemText = ({
  item,
  properTitle,
  contentType,
  componentId,
}: any) => (
  <TouchableOpacity
    onPress={() =>
      pushNavigation(componentId, CONTENT_SCREEN, item.title, {
        properTitle,
        contentType,
      })
    }
  >
    <Item>
      <ItemTitle>{item.title}</ItemTitle>
      <ItemDate>{item.date}</ItemDate>
    </Item>
  </TouchableOpacity>
);

const ContentListItemOther = ({ item, properTitle }: any) => (
  <TouchableOpacity
    onPress={() => {
      if (item.url) {
        goToURL(item.url);
      } else {
        setRoot(`navigation.${properTitle}Screen`);
      }
    }}
  >
    <Item>
      <ItemTitle>{item.title}</ItemTitle>
      <ItemTitle>{item.description}</ItemTitle>
    </Item>
  </TouchableOpacity>
);

export const ContentListItem = ({ item, contentType, componentId }: any) => {
  const properTitle = generateProperTitle(item.title);

  switch (contentType) {
    case 'articles':
    case 'practices':
      return (
        <ContentListItemText
          item={item}
          properTitle={properTitle}
          contentType={contentType}
          componentId={componentId}
        />
      );
    case 'other':
      return <ContentListItemOther item={item} properTitle={properTitle} />;
    case 'meditations':
    case 'podcasts':
    default:
      throw new Error('incorrect type - ContentListItem render()');
  }
};
