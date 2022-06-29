import { Text, TouchableOpacity, View } from 'react-native';
import Layout from '../components/global/Layout';

const Account = () => (
  // const setIsLoggedIn = useStoreActions(
  //   (actions) => actions.user.setIsLoggedIn,
  // );

  <Layout>
    <View className="flex-1 items-center justify-center">
      <Text>This is Account page</Text>
      <TouchableOpacity
        className="bg-gray-600 px-6 py-3 mt-5 rounded-lg shadow-lg w-[200px]"
        onPress={() => console.log('Logout')}
      >
        <Text className="text-white  text-center font-bold">Logout</Text>
      </TouchableOpacity>
    </View>
  </Layout>
);
export default Account;
