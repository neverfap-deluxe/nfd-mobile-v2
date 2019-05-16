import React from 'react';
import { ScrollView, Text } from 'react-native';

import { LoadingContainer } from '../../emotion/componentStyles';
import { css } from '@emotion/native';

const loadingText = css`
  font-size: 35px;
`;


export const LoadingScreen = ({ componentId }: any) => {
  return (
    <LoadingContainer>
      <Text style={loadingText}>Loading...</Text>
    </LoadingContainer>
  );
};
