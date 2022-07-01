/* eslint global-require: 0 */
import { useEffect, useState } from 'react';
// import { PersistGate } from 'zustand-persist';
import { ThemeProvider } from 'styled-components/native';
import * as Font from 'expo-font';
import { LogBox } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { ApolloProvider } from '@apollo/client';

import theme from './utils/theme';
import Splash from './screens/Splash';
import Navigation from './screens';
import useUserStore from './store/user';
import apolloClient from './utils/apolloClient';

// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); // Ignore all log notifications

const AppInner = () => {
  const { isLoggedIn } = useUserStore();
  // const isLoggedIn = false;
  console.log('isLoggedIn', isLoggedIn);

  return <Navigation isLoggedIn={isLoggedIn} />;
};

const AppMain = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Raleway-Light': require('./assets/fonts/Raleway-Light.ttf'),
      'Raleway-Regular': require('./assets/fonts/Raleway-Regular.ttf'),
      'Raleway-Medium': require('./assets/fonts/Raleway-Medium.ttf'),
      'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'),
      'Raleway-Italic': require('./assets/fonts/Raleway-Italic.ttf'),
    });
    setTimeout(() => setFontLoaded(true), 400);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <TailwindProvider>
          {/* <PersistGate
          loading={<Splash />}
          onBeforeLift={() => {
            console.log('onBeforeLift');
          }}
        > */}
          {fontLoaded ? <AppInner /> : <Splash />}
          {/* </PersistGate> */}
        </TailwindProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default AppMain;
