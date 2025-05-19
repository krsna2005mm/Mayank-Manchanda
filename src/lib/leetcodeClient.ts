
import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

// Error handling link
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => 
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    );
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

// HTTP link with CORS mode
const httpLink = new HttpLink({
  uri: 'https://leetcode.com/graphql',
  // Adding these headers sometimes helps with CORS issues
  // but likely won't solve LeetCode's server-side restrictions
  fetchOptions: {
    mode: 'cors',
  },
  credentials: 'same-origin'
});

const leetcodeClient = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
  },
});

export default leetcodeClient;

// Mock data to use when API fails
export const leetcodeMockData = {
  username: "mayank-1007",
  profile: {
    ranking: 15842,
    reputation: 352,
    starRating: 4.8
  },
  badges: [
    { id: "1", name: "Knight", displayName: "Knight" },
    { id: "2", name: "100DaysOfCode", displayName: "100 Days of Code" },
    { id: "3", name: "DailyChallengeStreak", displayName: "Daily Challenge" },
    { id: "4", name: "TopContributor", displayName: "Top Contributor" }
  ],
  submitStats: {
    acSubmissionNum: [
      { difficulty: "All", count: 387 },
      { difficulty: "Easy", count: 178 },
      { difficulty: "Medium", count: 182 },
      { difficulty: "Hard", count: 27 }
    ]
  },
  userContestRanking: {
    attendedContestsCount: 22,
    rating: 1851,
    topPercentage: 5.2,
    badge: {
      name: "Knight"
    }
  }
};
