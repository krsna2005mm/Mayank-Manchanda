
import { ApolloClient, InMemoryCache } from '@apollo/client';

const leetcodeClient = new ApolloClient({
  uri: 'https://leetcode.com/graphql',
  cache: new InMemoryCache(),
  // No authentication token needed for basic public profile data
});

export default leetcodeClient;
