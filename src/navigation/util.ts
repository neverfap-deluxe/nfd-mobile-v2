import { Navigation } from 'react-native-navigation';
import { Linking } from 'react-native';
import { statusBar, topBar, layout, overlay, preview, animations } from './options';

export const generateProperTitle = (title: string): string => {
  const title1 = title.split(' ').join('');
  const title2 = title1.replace(/[^a-z0-9+]+/gi, '');
  return title2;
};

export const goToURL = (url: string) => {
  Linking.canOpenURL(url).then((supported: any) => {
    if (supported) {
      Linking.openURL(url);
    } else {
      console.log("Don't know how to open URI: " + url);
    }
  });
};

export const setRoot = (screen: string, props = {}) => {
  Navigation.setRoot({
    root: {
      component: {
        name: screen,
        passProps: {
          ...props,
        },
      },
    },
  });
};

export const pushNavigation = (
  componentId: string,
  screen: string,
  title: string,
  subtitle: string,
  props = {}
) => {
  Navigation.push(componentId, {
    component: {
      name: screen,
      passProps: {
        ...props,
      },
      options: {
        ...statusBar,
        ...layout,
        ...topBar(title, subtitle),
        ...overlay,
        ...preview,
        ...animations,
      },
    },
  });
};

export const showModal = (screen: string, title: string, props = {}) => {
  Navigation.showModal({
    stack: {
      children: [{
        component: {
          name: screen,
          passProps: {
            ...props,
          },
          options: {
            topBar: {
              title: {
                text: title
              }
            }
          }
        }
      }]
    }
  });
}

export const dismissModal = (componentId: string) => Navigation.dismissModal(componentId);
