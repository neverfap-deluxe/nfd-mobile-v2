import CodePush from 'react-native-code-push';
import { codePushConfig } from '../utils/code-push';

import { Home } from './home/Home';
import { ContentList } from './content/ContentList';
import { About } from './about/About';

export const INITIALISATION_SCREEN = 'navigation.InitialisationScreen';
export const HOME_SCREEN = 'navigation.HomeScreen';
export const ARTICLES_SCREEN = 'navigation.ArticlesScreen';
export const PRACTICES_SCREEN = 'navigation.PracticesScreen';
// export const PODCASTS_SCREEN = 'navigation.PodcastsScreen';
export const CONTENT_SCREEN = 'navigation.ContentScreen';
export const OTHER_SCREEN = 'navigation.OtherScreen';
export const ABOUT_SCREEN = 'navigation.AboutScreen';

const PageScreens = new Map();
PageScreens.set(HOME_SCREEN, CodePush(codePushConfig())(Home));
ageScreens.set(ARTICLES_SCREEN, ContentList);
PageScreens.set(PRACTICES_SCREEN, ContentList);
PageScreens.set(OTHER_SCREEN, ContentList);
PageScreens.set(ABOUT_SCREEN, About);

export default PageScreens;