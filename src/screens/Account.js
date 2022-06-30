import { View } from 'react-native';
import { Button, Text } from '../components/atoms';
import Layout from '../components/global/Layout';

const Account = () => (
  // const setIsLoggedIn = useStoreActions(
  //   (actions) => actions.user.setIsLoggedIn,
  // );

  <Layout>
    <View className="flex-1 items-center justify-center px-10">
      <Text className="mb-4">This is Account page</Text>
      <Button isSmall fullWidth>
        Logout
      </Button>
    </View>
  </Layout>
);
export default Account;
