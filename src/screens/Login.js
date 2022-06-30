import { View, KeyboardAvoidingView, Platform } from 'react-native';
import Layout from '../components/global/Layout';

import LoginEmailForm from '../components/forms/LoginEmailForm';

const Login = ({ navigation }) => (
  <Layout>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
    >
      <View className="flex-1 px-5">
        <LoginEmailForm handleSubmit={() => navigation.navigate('Dashboard')} />
      </View>
    </KeyboardAvoidingView>
  </Layout>
);
export default Login;
