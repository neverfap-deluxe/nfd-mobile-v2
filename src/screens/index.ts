import PageScreens from './pageScreens';
import ArticlesScreens from './articlesScreens';
import PracticesScreens from './practicesScreens';
// import PodcastsScreens from './podcastsScreens';

import { navigationMain } from '../navigation';

export const Screens = new Map([ ...PageScreens, ...ArticlesScreens, ...PracticesScreens,/*  ...PodcastsScreens */ ]);

export const startApp = () => {
  navigationMain();
};

// Navigation.setRoot({
//   root: {
//     stack: {
//       id: 'ROOT_STACK',
//       children: [
//         {
//           component: { name: HOME },
//         },
//       ],
//     },
//   },
// });

// export const HOME = 'nfdmob.Home';
// export const COUNTER = 'nfdmob.Counter';

// Screens.set(HOME, CodePush(codePushConfig())(HomeScreen));
// Screens.set(COUNTER, CounterScreen);
