import React, { Component } from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import { TopBar } from '../../emotion/components';
import { navigationMain } from '../../navigation';

export const TopBarStack = ({  }: any) => {
  const toMain = () => {
    navigationMain();
  };
  return (
    <TopBar>
      <TouchableOpacity onPress={toMain}>
        <Image source={require('../../assets/icons/24/chevron-left.png')} />
      </TouchableOpacity>
      {/* <Text onPress={this.toMain}>About</Text> */}
    </TopBar>
  );
};
