
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer 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`,
  },
  cache: new InMemoryCache(),
});

export default client;
