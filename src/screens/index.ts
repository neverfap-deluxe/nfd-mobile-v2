import CodePush from 'react-native-code-push';
import { Navigation } from 'react-native-navigation';
import { codePushConfig } from '../utils/code-push';
// import { CounterScreen } from './neuno/counter/Counter';
// import { HomeScreen } from './neuno/home/Home';

import PageScreens from './pageScreens';
import ArticlesScreens from './articlesScreens';
import PracticesScreens from './practicesScreens';
// import PodcastsScreens from './podcastsScreens';

export const Screens = new Map([ ...PageScreens, ...ArticlesScreens, ...PracticesScreens,/*  ...PodcastsScreens */ ]);

export const HOME = 'nfdmob.Home';
export const COUNTER = 'nfdmob.Counter';

// Screens.set(HOME, CodePush(codePushConfig())(HomeScreen));
// Screens.set(COUNTER, CounterScreen);

export const startApp = () => {
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
