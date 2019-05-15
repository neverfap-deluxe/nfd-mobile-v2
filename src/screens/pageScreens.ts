import CodePush from 'react-native-code-push';
import { codePushConfig } from '../utils/code-push';

import { HomeScreen } from './home/Home';
import { ContentListScreen } from './content/ContentList';
import { ContentScreen } from './content/Content';
import { AboutScreen } from './about/About';

export const INITIALISATION_SCREEN = 'navigation.InitialisationScreen';
export const HOME_SCREEN = 'navigation.HomeScreen';
export const ARTICLES_SCREEN = 'navigation.ArticlesScreen';
export const PRACTICES_SCREEN = 'navigation.PracticesScreen';
// export const PODCASTS_SCREEN = 'navigation.PodcastsScreen';
export const CONTENT_SCREEN = 'navigation.ContentScreen';
export const OTHER_SCREEN = 'navigation.OtherScreen';
export const ABOUT_SCREEN = 'navigation.AboutScreen';

const PageScreens = new Map();
PageScreens.set(HOME_SCREEN, CodePush(codePushConfig())(HomeScreen));
PageScreens.set(CONTENT_SCREEN, ContentScreen);
PageScreens.set(ARTICLES_SCREEN, ContentListScreen);
PageScreens.set(PRACTICES_SCREEN, ContentListScreen);
PageScreens.set(OTHER_SCREEN, ContentListScreen);
PageScreens.set(ABOUT_SCREEN, AboutScreen);

export default PageScreens;
