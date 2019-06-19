import React from 'react';
import { View, Text } from 'react-native';
import { LatestContent } from '../../emotion/componentStyles';

import { Button } from '../../components/button/Button';
import { goToURL } from '../../navigation/util';

import { homepage__stats, homepage__stat__block, homepage__stat__title, homepage__stat__number, homepage__join__button } from '../../emotion/homeStyles';
import { css } from '@emotion/native';

export const HomeStats = ({ getDbUsersStats, getAccountabilityMessagesStats, getAccountabilityReactsStats }: any) => {
  return (
    <React.Fragment>
      <LatestContent>
        <View style={homepage__stats}>
          <View style={homepage__stat__block}>
            <Text style={homepage__stat__title}>
              Participants
            </Text>
            <Text style={homepage__stat__number}>
              {getDbUsersStats.total}
            </Text>
          </View>
          <View style={homepage__stat__block}>
            <Text style={homepage__stat__title}>Posts</Text>
            <Text style={homepage__stat__number}>
              {getAccountabilityMessagesStats.total}
            </Text>
          </View>
          <View style={homepage__stat__block}>
            <Text style={homepage__stat__title}>Reacts</Text>
            <Text style={homepage__stat__number}>
              {getAccountabilityReactsStats.total}
            </Text>
          </View>
        </View>
      </LatestContent>
      <View style={css`margin-top: 30px;`}>
        <Button style={homepage__join__button} onPress={() => goToURL('https://discord.gg/YETRkSj')} title="Join #accountabilty" />
      </View>
    </React.Fragment>
  );
};

