import PropTypes from 'prop-types';
import { StatusBar } from 'expo-status-bar';
// import { Root } from 'react-native-alert-notification';
import { SafeAreaView } from 'react-native';

const Layout = (props) => {
  const { children } = props;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="auto" />
      {children}
    </SafeAreaView>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
