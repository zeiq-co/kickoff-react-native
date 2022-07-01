import { View } from 'react-native';
import { Button, Text } from '../components/atoms';
import Layout from '../components/global/Layout';
import useUserStore from '../store/user';

const Account = () => {
  const { setIsLoggedIn } = useUserStore();
  return (
    <Layout>
      <View className="flex-1 items-center justify-center px-10">
        <Text className="mb-4">This is Account page</Text>
        <Button isSmall fullWidth onPress={() => setIsLoggedIn(false)}>
          Logout
        </Button>
      </View>
    </Layout>
  );
};
export default Account;
