import { ApolloClient, InMemoryCache } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { CachePersistor } from 'apollo3-cache-persist';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import apolloLogger from 'apollo-link-logger';
import {
  CachePersistor,
  MMKVWrapper,
  AsyncStorageWrapper,
} from 'apollo3-cache-persist';
import { RetryLink } from '@apollo/client/link/retry';
import QueueLink from 'apollo-link-queue';
import SerializingLink from 'apollo-link-serialize';
import config from './config';
import MmkvStroage from './storage';

const cache = new InMemoryCache();
export const queueLink = new QueueLink();
const serializingLink = new SerializingLink();
export const persistor = new CachePersistor({
  cache,
  storage: AsyncStorage,
  debug: config.debug,
});

const cacheStorage =
  process.env.NODE_ENV === 'development'
    ? new AsyncStorageWrapper(AsyncStorage)
    : new MMKVWrapper(MmkvStroage);

export const apolloPersistor = new CachePersistor({
  cache,
  storage: cacheStorage,
  debug: config.debug,
  maxSize: false,
  key: 'packrs-apollo-data',
  trigger: 'background',
});

const httpLink = createHttpLink({
  uri: config.debug ? config.graphQlUriDev : config.graphQlUri,
  credentials: 'same-origin',
});
const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token =
    process.env.NODE_ENV === 'development'
      ? await AsyncStorage.getItem('token')
      : MmkvStroage.getString('token');
  // console.log('token', token);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token || '',
    },
  };
});

const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: Infinity,
    jitter: true,
  },
  attempts: {
    max: 5,
    retryIf: (error, _operation) => !!error,
  },
});

const client = new ApolloClient({
  link: ApolloLink.from([
    apolloLogger,
    serializingLink,
    retryLink,
    queueLink,
    onError(({ graphQLErrors, networkError }) => {
      if (config.debug) {
        console.log('onError', graphQLErrors, networkError);
      }
      if (graphQLErrors) {
        graphQLErrors.forEach(({ message }) => {
          console.log('graphQLErrors', message);
        });
      }
      if (networkError) {
        console.log('networkError', networkError);
      }
    }),
    authLink.concat(httpLink),
  ]),
  cache,
});

// client.onResetStore(() => persistor.purge());
// persistor.purge();
// clear local storage
// AsyncStorage.clear();
// clear local storage
// Purge persistor when the store was reset.

export default client;
