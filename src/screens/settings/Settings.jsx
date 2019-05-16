import React from 'react';
import { ModalContainer } from '../../'
import { dismissModal } from '../../navigation/util';

export const SettingsModal = ({ componentId }: any) => {
  return (
    <ModalContainer>

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
