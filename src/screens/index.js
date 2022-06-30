import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Icon } from '../components/atoms';
import theme from '../utils/theme';
import Splash from './Splash';
import Login from './Login';
import Dashboard from './Dashboard';
import Account from './Account';
// import Account from './Account';
// import Test from './Test';

const navigationOptions = ({ icon }) => {
  const options = {};
  options.tabBarIcon = ({ color }) => (
    <Icon name={icon} size={25} color={color} />
  );
  return options;
};

const LoginStack = createNativeStackNavigator();
function LoginStackScreen() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </LoginStack.Navigator>
  );
}

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Dashboard"
        component={Dashboard}
        // options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

const ProfileStack = createNativeStackNavigator();
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Account}
        // options={{ headerShown: false }}
      />
    </ProfileStack.Navigator>
  );
}

const MainStack = createBottomTabNavigator();
const screenOptions = {
  tabBarActiveTintColor: theme.secondaryColor,
  tabBarInactiveTintColor: theme.backgroundColor,
  presentation: 'modal',
  headerShown: false,
  tabBarStyle: {
    backgroundColor: theme.primaryColor,
    boxShadow: 'none',
    borderTop: 0,
    paddingBottom: 6,
    paddingTop: 5,
    height: 50,
  },
};
function MainStackScreen() {
  return (
    <MainStack.Navigator screenOptions={screenOptions}>
      <MainStack.Screen
        name="Home"
        component={HomeStackScreen}
        options={navigationOptions({ icon: 'explore' })}
      />
      <MainStack.Screen
        name="Account"
        component={ProfileStackScreen}
        options={navigationOptions({ icon: 'person' })}
      />
    </MainStack.Navigator>
  );
}

const ScreensStack = createNativeStackNavigator();
function ScreensStackMain({ isLoggedIn }) {
  // console.log('app', isLoggedIn);
  let app = MainStackScreen;
  if (!isLoggedIn) {
    // app = LoginStackScreen;
    app = MainStackScreen;
  }

  return (
    <NavigationContainer>
      <ScreensStack.Navigator>
        {/* <ScreensStack.Screen name="Test" component={Test} /> */}
        <ScreensStack.Screen
          options={{ headerShown: false }}
          name="Splash"
          component={Splash}
        />
        <ScreensStack.Screen
          options={{ headerShown: false }}
          name="App"
          component={app}
        />
      </ScreensStack.Navigator>
    </NavigationContainer>
  );
}

export default ScreensStackMain;
