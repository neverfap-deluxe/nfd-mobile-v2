import PageScreens from './pageScreens';
import ArticlesScreens from './articlesScreens';
import PracticesScreens from './practicesScreens';
// import PodcastsScreens from './podcastsScreens';

import { navigationMain } from '../navigation';

export const Screens = new Map([ ...PageScreens, ...ArticlesScreens, ...PracticesScreens,/*  ...PodcastsScreens */ ]);

export const startApp = () => {
  navigationMain();
};
