import React from 'react';
import styled from 'styled-components/native';
// import { ALERT_TYPE, Dialog } from 'react-native-alert-notification';

import { View, Text } from 'react-native';
import Layout from '../components/global/Layout';

const Dashboard = () => (
  <Layout>
    <View className="flex-1 items-center justify-center">
      <Text className="font-bold">This is Dashboard page</Text>
    </View>
  </Layout>
);
export default Dashboard;
