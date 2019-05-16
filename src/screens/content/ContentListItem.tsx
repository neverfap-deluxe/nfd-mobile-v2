import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Item, ItemTitle, ItemDate } from '../../emotion/componentStyles';

import {
  generateProperTitle,
  setRoot,
  pushNavigation,
  goToURL,
} from '../../navigation/util';
import { CONTENT_SCREEN } from '../pageScreens';

const ContentListItemText = ({
  item,
  properTitle,
  contentCategory,
  contentType,
  componentId,
}: any) => (
  <TouchableOpacity
    onPress={() =>
      pushNavigation(
        componentId,
        CONTENT_SCREEN,
        item.title, // contentCategory,
        '',
        {
          properTitle,
          contentType,
        }
      )
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
      <ItemDate>{item.description}</ItemDate>
    </Item>
  </TouchableOpacity>
);

export const ContentListItem = ({
  item,
  contentType,
  contentCategory,
  componentId,
}: any) => {
  const properTitle = generateProperTitle(item.title);

  switch (contentType) {
    case 'articles':
    case 'practices':
      return (
        <ContentListItemText
          item={item}
          properTitle={properTitle}
          contentCategory={contentCategory}
          contentType={contentType}
          componentId={componentId}
        />
      );
    case 'more':
      return <ContentListItemOther item={item} />;
    case 'meditations':
    case 'podcasts':
    default:
      throw new Error('incorrect type - ContentListItem render()');
  }
};
