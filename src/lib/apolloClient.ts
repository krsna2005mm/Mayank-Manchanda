
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GITHUB_TOKEN } from './constants';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
  },
  cache: new InMemoryCache(),
});

export default client;
