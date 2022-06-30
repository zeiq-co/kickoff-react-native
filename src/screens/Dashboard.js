import { View } from 'react-native';
import { Text } from '../components/atoms';
import Layout from '../components/global/Layout';

const Dashboard = () => (
  <Layout>
    <View className="flex-1 items-center justify-center">
      <Text semiBold>This is Dashboard page</Text>
    </View>
  </Layout>
);
export default Dashboard;
