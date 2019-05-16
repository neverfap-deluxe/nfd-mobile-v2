import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { TopBar } from '../../emotion/componentStyles';
// import { navigationSettings } from '../../navigation';
// import LinearGradient from 'react-native-linear-gradient';

export const TopBarMain = ({  }: any) => {
  const toSettings = () => {
    // navigationSettings();
  };
  return (
    // <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['rgb(255,46,182)', 'rgb(227,152,2)']}>
    <TopBar>
      <TouchableOpacity>
        <Text onPress={toSettings}>Settings</Text>
      </TouchableOpacity>
    </TopBar>
  );
};
