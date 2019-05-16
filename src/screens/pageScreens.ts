import CodePush from 'react-native-code-push';
import { codePushConfig } from '../utils/code-push';

import { HomeScreen } from './home/Home';
import { ArticlesScreen } from './articles/Articles';
import { PracticesScreen } from './practices/Practices';
import { MoreScreen } from './more/More';
import { ContentScreen } from './content/Content';

import { AboutModal } from './about/About';

export const INITIALISATION_SCREEN = 'navigation.InitialisationScreen';
export const HOME_SCREEN = 'navigation.HomeScreen';
export const ARTICLES_SCREEN = 'navigation.ArticlesScreen';
export const PRACTICES_SCREEN = 'navigation.PracticesScreen';
// export const PODCASTS_SCREEN = 'navigation.PodcastsScreen';
export const CONTENT_SCREEN = 'navigation.ContentScreen';
export const MORE_SCREEN = 'navigation.MoreScreen';
export const ABOUT_MODAL = 'navigation.AboutModal';

const PageScreens = new Map();
PageScreens.set(HOME_SCREEN, CodePush(codePushConfig())(HomeScreen));
PageScreens.set(CONTENT_SCREEN, ContentScreen);
PageScreens.set(ARTICLES_SCREEN, ArticlesScreen);
PageScreens.set(PRACTICES_SCREEN, PracticesScreen);
PageScreens.set(MORE_SCREEN, MoreScreen);

PageScreens.set(ABOUT_MODAL, AboutModal);

export default PageScreens;
