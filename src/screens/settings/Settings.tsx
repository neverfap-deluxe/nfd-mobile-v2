import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ModalContainer } from '../../emotion/componentStyles';
import { dismissModal } from '../../navigation/util';
import { css } from '@emotion/native';

export const SettingsModal = ({ componentId }: any) => {
  return (
    <ModalContainer>
      <TouchableOpacity onPress={() => dismissModal(componentId)}>
        <Text style={css`color: #212121;`}>
          Back
        </Text>
      </TouchableOpacity>
      <View style={css`color: #212121; margin-top: 24px;`}>
        <Text style={css`margin-bottom: 12px; color: #212121; margin-top: 12px; font-size: 18px;`}>
          There are no settings as of yet.
        </Text>
        <Text style={css`margin-bottom: 12px; color: #212121; font-size: 18px;`}>
          Hell, this is the first time I've ever built a mobile app, and it was seriously difficult, so I deserve some kind of credit haha.
        </Text>
        <Text style={css`margin-bottom: 12px; color: #212121; font-size: 18px;`}>
          Regardless, thank you for downloading the NeverFap Deluxe Mobile App and I will be improving it over the coming months!
        </Text>
        <Text style={css`margin-bottom: 12px; color: #212121; font-size: 18px;`}>
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
