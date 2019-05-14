import { Navigation } from 'react-native-navigation';

import {
  HOME_SCREEN,
  ARTICLES_SCREEN,
  PRACTICES_SCREEN,
  // PODCASTS_SCREEN,
  // MEDITATIONS_SCREEN,
  INITIALISATION_SCREEN,
  OTHER_SCREEN,
  // CONTENT_SCREEN,
} from '../screens/pageScreens';

export const navigationMain = () =>
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'BottomTabsId',
        children: [
          {
            component: {
              name: HOME_SCREEN,
              options: {
                bottomTab: {
                  fontSize: 12,
                  text: 'Home',
                  icon: require('./icons/24/home.png'),
                },
              },
            },
          },
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
          //         icon: require('./icons/24/newspaper-o.png'),
          //       }
          //     }
          //   },
          // },

          {
            stack: {
              children: [
                {
                  component: {
                    name: ARTICLES_SCREEN,
                    options: {
                      bottomTab: {
                        fontSize: 12,
                        text: 'Articles',
                        // icon: require('./signin.png')
                      }
                    },
                    passProps: {
                      contentType: 'articles',
                    },
                  }
                },
              ]
            },
          },

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

          {
            stack: {
              children: [
                {
                  component: {
                    name: PRACTICES_SCREEN,
                    options: {
                      bottomTab: {
                        fontSize: 12,
                        text: 'Practices',
                        // icon: require('../assets/icons/24/medkit.png')
                      }
                    },
                    passProps: {
                      contentType: 'practices',
                    },
                  }
                },
              ]
            },
          },

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
          {
            component: {
              name: OTHER_SCREEN,
              passProps: {
                contentType: 'other',
              },
              options: {
                bottomTab: {
                  fontSize: 12,
                  text: 'More',
                  icon: require('./icons/24/ellipsis-h.png'),
                },
              },
            },
          },
        ],
      },
    },
  });

export const navigationSettings = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: 'AboutId',
        children: [
          {
            component: {
              name: SETTINGS_SCREEN,
            },
          },
        ],
      },
    },
  });

export const navigationLeftSideBar = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: 'AboutId',
        children: [
          {
            component: {
              name: SETTINGS_SCREEN,
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

