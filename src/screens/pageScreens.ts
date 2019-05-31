import CodePush from 'react-native-code-push';
import { codePushConfig } from '../utils/code-push';

import { HomeScreen } from './home/Home';
import { ArticlesScreen } from './articles/Articles';
import { PracticesScreen } from './practices/Practices';
import { MeditationsScreen } from './meditations/Meditations';
import { PodcastsScreen } from './podcasts/Podcasts';
import { MoreScreen } from './more/More';

import { ContentTextScreen } from './contentText/ContentText';
import { ContentAudioScreen } from './contentAudio/ContentAudio';

import { AboutModal } from './about/About';
import { SettingsModal } from './settings/Settings';

export const INITIALISATION_SCREEN = 'navigation.InitialisationScreen';
export const HOME_SCREEN = 'navigation.HomeScreen';
export const ARTICLES_SCREEN = 'navigation.ArticlesScreen';
export const PRACTICES_SCREEN = 'navigation.PracticesScreen';
export const PODCASTS_SCREEN = 'navigation.PodcastsScreen';
export const MEDITATIONS_SCREEN = 'navigation.MeditationsScreen';
export const MORE_SCREEN = 'navigation.MoreScreen';

export const CONTENT_TEXT_SCREEN = 'navigation.ContentTextScreen';
export const CONTENT_AUDIO_SCREEN = 'navigation.ContentAudioScreen';

export const ABOUT_MODAL = 'navigation.AboutModal';
export const SETTINGS_MODAL = 'navigation.SettingsModal';

const PageScreens = new Map();

PageScreens.set(HOME_SCREEN, CodePush(codePushConfig())(HomeScreen));
PageScreens.set(ARTICLES_SCREEN, ArticlesScreen);
PageScreens.set(PRACTICES_SCREEN, PracticesScreen);
PageScreens.set(PODCASTS_SCREEN, PodcastsScreen);
PageScreens.set(MEDITATIONS_SCREEN, MeditationsScreen);
PageScreens.set(MORE_SCREEN, MoreScreen);

PageScreens.set(CONTENT_TEXT_SCREEN, ContentTextScreen);
PageScreens.set(CONTENT_AUDIO_SCREEN, ContentAudioScreen);

PageScreens.set(ABOUT_MODAL, AboutModal);
PageScreens.set(SETTINGS_MODAL, SettingsModal);

export default PageScreens;
