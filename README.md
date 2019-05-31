// you have to run build-env.sh
// as well as update detox in packages.

# NfdMob

See [react-native-starter docs](https://ueno-llc.github.io/react-native-starter/)

## Development

```bash
yarn start & react-native run-ios
```

// REACT NATIVE VIDEO

https://hackernoon.com/building-a-music-streaming-app-using-react-native-6d0878a13ba4


// OTHER READEME.

App generation
https://github.com/ueno-llc/react-native-starter
// create-ueno-app native NfdMob

Icon Generation

https://stackoverflow.com/questions/34329715/how-to-add-icons-to-react-native-app
https://blog.bam.tech/developper-news/change-your-react-native-app-icons-in-a-single-command-line
https://github.com/bamlab/generator-rn-toolbox
https://makeappicon.com/

Fastlane

# https://carloscuesta.me/blog/shipping-react-native-fastlane-travis/

# https://www.gravitywell.co.uk/latest/android/posts/automating-react-native-deployments-with-fastlane/

Setup Navigation.

https://wix.github.io/react-native-navigation/#/docs/Installing
https://github.com/wix/react-native-navigation/issues/1933

https://github.com/wix/react-native-navigation/issues/4391

https://github.com/oblador/react-native-vector-icons

https://github.com/birkir/hekla/blob/master/src/screens/index.ts



"react-native-linear-gradient": "^2.5.4",

    "react-native-track-player": "^1.1.4",

react-native link // very important to link libraries to the directories.

Run instructions for iOS:
• cd /Users/juliusreade/Code/PER/NfdMob && react-native run-ios - or -
• Open ios/NfdMob.xcodeproj in Xcode
• Hit the Run button

Run instructions for Android:
• Have an Android emulator running (quickest way to get started), or a device connected.
• cd /Users/juliusreade/Code/PER/NfdMob && react-native run-android

yarn add react-native-navigation react-native-vector-icons
yarn add @emotion/native @emotion/core emotion-theming

yarn add axois fs-extra lodash

React-native init HelloWorld
react-native run-ios

yarn add react-apollo apollo-cache-inmemory apollo-client apollo-link apollo-link-http apollo-link-state

yarn add graphql-tag graphql

yarn add react-native-linear-gradient
https://github.com/react-native-community/react-native-linear-gradient
// may have to do it manually, have tried linking first.

{
"name": "NfdMob",
"version": "0.0.1",
"private": true,
"scripts": {
"start": "node node\*modules/react-native/local-cli/cli.js start",
"g": "node util/generateApi.js && node util/generateContent.js",
"ga": "node util/generateApi.js",
"gc": "node util/generateContent.js",
"test": "jest",
"lint": "npx eslint ./src/\*\*/\_.js"
},
"dependencies": {
"@emotion/core": "^10.0.10",
"@emotion/native": "^10.0.10",
"apollo-cache-inmemory": "^1.5.1",
"apollo-client": "^2.5.1",
"apollo-link": "^1.2.11",
"apollo-link-http": "^1.5.14",
"apollo-link-state": "^0.4.2",
"axios": "^0.18.0",
"emotion-theming": "^10.0.10",
"fs-extra": "^7.0.1",
"graphql": "^14.3.0",
"graphql-tag": "^2.10.1",
"lodash": "^4.17.11",
"react": "16.8.3",
"react-apollo": "^2.5.5",
"react-native": "0.59.5",
"react-native-navigation": "^2.18.4"
},
"devDependencies": {
"@babel/core": "^7.4.4",
"@babel/runtime": "^7.4.4",
"babel-jest": "^24.8.0",
"eslint": "^5.16.0",
"eslint-plugin-react": "^7.13.0",
"jest": "^24.8.0",
"metro-react-native-babel-preset": "^0.54.0",
"react-test-renderer": "16.8.3"
},
"jest": {
"preset": "react-native"
},
"isSwift": true
}

Originally in Index.

import { Navigation } from 'react-native-navigation';
import { StatusBar } from 'react-native';
// import { name as appName } from './app.json';
import registerScreens from './src/screens';
import { navigationMain } from './src/navigation';
import { navigationOptions } from './src/navigationOptions';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
navigationMain();
});

// StatusBar.setBarStyle('dark-content', true); // light-content
// StatusBar.setTranslucent(false);
StatusBar.setHidden(true, 'slide');

// Navigation.setDefaultOptions(navigationOptions);



ORIGINAL package.json with eslint

  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{ts,tsx,js,json,md}": [
      "git add"
    ],
    "*.{ts,tsx}": [
      "tslint"
    ],
    "*.{scss}": [
      "stylelint"
    ]
  },
