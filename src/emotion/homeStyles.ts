import { Dimensions } from 'react-native';
import { css } from '@emotion/native';

export const homepage__stats = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const homepage__stat__block = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${Dimensions.get('window').width * 0.2};
`;

export const homepage__stat__title = css`
  width: ${Dimensions.get('window').width * 0.2};
  text-align: center;
`;

export const homepage__stat__number = css`
  width: ${Dimensions.get('window').width * 0.2};
  font-size: 18px;
`;

export const homepage__join__button = css`
  margin-top: 10px;
  margin-bottom: 10px;
`;
