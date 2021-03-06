import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Container } from '../../emotion/componentStyles';
import { PageTitle } from '../../emotion/textStyles';

import { TopBarMain } from '../topbar/TopBarMain';
import { LoadingScreen } from '../loading/Loading';

import { HomeStats } from './HomeStats';
import { HomeContent } from './HomeContent';

import { ApolloProvider } from 'react-apollo';
import { Query } from 'react-apollo';

import { HOMEPAGE } from '../../graphql/queries/homepage';
import client from '../../client';

export const HomeScreen = ({ componentId }: any) => {
  return (
    <ApolloProvider client={client}>
      <Query query={HOMEPAGE}>
        {({ loading, error, data }) => {
          if (loading) return <LoadingScreen />;
          if (error) return (
            <ScrollView>
              <Container>
                <TopBarMain />

                <PageTitle>NeverFap Deluxe</PageTitle>

                <HomeContent componentId={componentId} />
              </Container>
            </ScrollView>
          );

          return (
            <ScrollView>
              <Container>
                <TopBarMain/>

                <PageTitle>NeverFap Deluxe</PageTitle>

                <HomeStats
                  getDbUsersStats={data.getDbUsersStats}
                  getAccountabilityMessagesStats={data.getAccountabilityMessagesStats}
                  getAccountabilityReactsStats={data.getAccountabilityReactsStats}
                />

                <HomeContent componentId={componentId}/>
              </Container>
            </ScrollView>
          );
        }}
      </Query>
    </ApolloProvider>
  );
};

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
    },
  },
};
