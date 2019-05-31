import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ModalContainer } from '../../emotion/componentStyles';
import { dismissModal } from '../../navigation/util';
import { css } from '@emotion/native';

export const SettingsModal = ({ componentId }: any) => {
  return (
    <ModalContainer>
      <TouchableOpacity onPress={() => dismissModal(componentId)}>
        <Text>
          Back
        </Text>
      </TouchableOpacity>
      <View>
        <Text style={css`margin-bottom: 12px; margin-top: 12px; font-size: 18px;`}>
          There are no settings as of yet.
        </Text>
        <Text style={css`margin-bottom: 12px; font-size: 18px;`}>
          Hell, this is the first time I've ever built a mobile app, so I deserve some kind of credit haha.
        </Text>
        <Text style={css`margin-bottom: 12px; font-size: 18px;`}>
          The Reade
        </Text>
      </View>
    </ModalContainer>
  );
};

SettingsModal.options = {
  topBar: {
    title: {
      text: 'Settings',
    },
  },
};
