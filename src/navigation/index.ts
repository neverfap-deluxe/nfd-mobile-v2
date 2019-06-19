import { Navigation } from 'react-native-navigation';

import {
  HOME_SCREEN,
  ARTICLES_SCREEN,
  PRACTICES_SCREEN,
  // PODCASTS_SCREEN,
  MEDITATIONS_SCREEN,
  INITIALISATION_SCREEN,
  MORE_SCREEN,
  // CONTENT_SCREEN,
} from '../screens/pageScreens';

import {
  statusBar,
  topBar,
  layout,
  overlay,
  preview,
  animations,
} from './options';

// const bottomTabSetup = (screen: string, tabTitle: string, topTitle: string, icon: string) => ({
//   stack: {
//     options: {
//       bottomTab: {
//         fontSize: 12,
//         text: 'Home',
//         icon: require('../assets/icons/24/home.png'),
//       },
//       ...statusBar,
//       ...topBar('NeverFap Deluxe Home', ''),
//       ...layout,
//       ...overlay,
//       ...preview,
//       ...animations,
//     },
//     children: [
//       {
//         component: {
//           name: HOME_SCREEN,
//         },
//       },
//     ],
//   },
// });
// ...bottomTabSetup(HOME_SCREEN, 'NeverFap Deluxe Home', 'Home', 'home.png'),
// ...bottomTabSetup(ARTICLES_SCREEN, 'NeverFap Deluxe Articles', 'Articles', 'newspaper-o.png'),
// ...bottomTabSetup(PRACTICES_SCREEN, 'NeverFap Deluxe Practices', 'Practices', 'medkit.png'),
// ...bottomTabSetup(MORE_SCREEN, 'More', 'More', 'ellipsis-h.png'),


export const navigationMain = () =>
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'BottomTabsId',
        children: [
          {
            stack: {
              options: {
                bottomTab: {
                  fontSize: 12,
                  text: 'Home',
                  icon: require('../assets/icons/24/home.png'),
                },
                ...statusBar,
                ...topBar('NeverFap Deluxe Home', ''),
                ...layout,
                ...overlay,
                ...preview,
                ...animations,
              },
              children: [
                {
                  component: {
                    name: HOME_SCREEN,
                  },
                },
              ],
            },
          },
          {
            stack: {
              options: {
                bottomTab: {
                  fontSize: 12,
                  text: 'Articles',
                  icon: require('../assets/icons/24/newspaper-o.png'),
                },
                ...statusBar,
                ...topBar('NeverFap Deluxe Articles', ''),
                ...layout,
                ...overlay,
                ...preview,
                ...animations,
              },
              children: [
                {
                  component: {
                    name: ARTICLES_SCREEN,
                    passProps: {
                      contentType: 'articles',
                    },
                  },
                },
              ],
            },
          },
          {
            stack: {
              options: {
                bottomTab: {
                  fontSize: 12,
                  text: 'Practices',
                  icon: require('../assets/icons/24/bullseye.png'),
                },
                ...statusBar,
                ...topBar('NeverFap Deluxe Practices', ''),
                ...layout,
                ...overlay,
                ...preview,
                ...animations,
              },
              children: [
                {
                  component: {
                    name: PRACTICES_SCREEN,
                    passProps: {
                      contentType: 'practices',
                    },
                  },
                },
              ],
            },
          },
          {
            stack: {
              options: {
                bottomTab: {
                  fontSize: 12,
                  text: 'Meditations',
                  icon: require('../assets/icons/24/medkit.png'),
                },
                ...statusBar,
                ...topBar('NeverFap Deluxe Meditations', ''),
                ...layout,
                ...overlay,
                ...preview,
                ...animations,
              },
              children: [
                {
                  component: {
                    name: MEDITATIONS_SCREEN,
                    passProps: {
                      contentType: 'meditations',
                    },
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: MORE_SCREEN,
                    passProps: {
                      contentType: 'more',
                    },
                    options: {
                      bottomTab: {
                        fontSize: 12,
                        text: 'More',
                        icon: require('../assets/icons/24/ellipsis-h.png'),
                      },
                      ...statusBar,
                      ...topBar('More', ''),
                      ...layout,
                      ...overlay,
                      ...preview,
                      ...animations,
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });

export const navigationInitialisation = () =>
  Navigation.setRoot({
    root: {
      component: {
        name: INITIALISATION_SCREEN,
      },
    },
  });

// const sideMenu = {
//   left: {
//     component: {}
//   },
//   center: {
//     stack: {
//       options: {},
//       children: [{
//         component: {}
//       }]
//     }
//   },
//   right: {
//     component: {}
//   }
// }

// {
//   component: {
//     name: ARTICLES_SCREEN,
//     passProps: {
//       contentType: 'articles',
//     },
//     options: {
//       bottomTab: {
//         fontSize: 12,
//         text: 'Articles',
//         icon: require('../assets/icons/24/newspaper-o.png'),
//       }
//     }
//   },
// },

// {
//   component: {
//     name: PRACTICES_SCREEN,
//     passProps: {
//       contentType: 'practices',
//     },
//     options: {
//       bottomTab: {
//         fontSize: 12,
//         text: 'Practices',
//         icon: require('../assets/icons/24/medkit.png'), // stethoscope
//       }
//     }
//   },
// },

// {
//   stack: {
//     children: [
//       {
//         component: {
//           name: PODCASTS_SCREEN,
//           options: {
//             bottomTab: {
//               fontSize: 12,
//               text: 'Podcasts',
//               // icon: require('./signin.png')
//             }
//           },
//           passProps: {
//             contentType: 'podcasts',
//           },
//         }
//       },
//     ]
//   },
// },

// {
//   component: {
//     name: MEDITATIONS_SCREEN,
//     passProps: {
//       contentType: 'meditations',
//     },
//     options: {
//       bottomTab: {
//         fontSize: 12,
//         text: 'Meditations',
//         // icon: require('./signin.png')
//       }
//     }
//   },
// },
