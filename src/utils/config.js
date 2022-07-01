const isTestBuild = true; // change this

export default {
  debug: process.env.NODE_ENV === 'development',
  appName: 'kickoff-react-native',
  projectKey: 'kickoff-react-native',
  graphQlUri: isTestBuild
    ? 'https://api-dev.listmeapp.co/api/graphql'
    : 'https://api-v3.listmeapp.co/api/graphql',
  graphQlUriDev: 'http://192.168.18.25:4000/api/graphql',
};
