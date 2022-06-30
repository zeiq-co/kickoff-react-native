import { View } from 'react-native';
import Layout from '../components/global/Layout';
import { Button, Text, TextInputGroup } from '../components/elements';

const Login = () => (
  <Layout>
    <View className="flex-1 ">
      <Text bold size="medium">
        This is Login page
      </Text>
      <Button fullWidth>Button</Button>
      <TextInputGroup placeholder="Email address" />
    </View>
  </Layout>
);
export default Login;
