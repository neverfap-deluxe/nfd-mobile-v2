import React from 'react';
import { Text } from 'react-native';
import { ModalContainer } from '../../emotion/componentStyles';
import { dismissModal } from '../../navigation/util';

export const SettingsModal = ({ componentId }: any) => {
  return (
    <ModalContainer>
      <Text onPress={() => dismissModal(componentId)}>
        Back
      </Text>
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
