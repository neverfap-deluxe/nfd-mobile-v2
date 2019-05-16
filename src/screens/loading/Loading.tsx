import React from 'react';
import { ScrollView, Text } from 'react-native';

import { Container } from '../../emotion/componentStyles';
import { css } from '@emotion/native';

const loadingText = css`
  font-size: 35px;
`;

// const loadingSubText = css`
//   font-size: 35px;
// `;

export const LoadingScreen = ({ componentId }: any) => {
  return (
    <ScrollView>
      <Container>
        <Text style={loadingText}>Loading...</Text>
        {/* <Text style={loadingSubText}>Daddy Reade is waiting for you.</Text> */}
      </Container>
    </ScrollView>
  );
};
