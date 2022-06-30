import { View, Text } from 'react-native';
import Layout from '../components/global/Layout';
import { Button } from '../components/elements';

const Login = () => (
  <Layout>
    <View className="flex-1 items-center justify-center">
      <Text className="font-bold">This is Login page</Text>
      <Button fullWidth>Button</Button>
    </View>
  </Layout>
);
export default Login;
