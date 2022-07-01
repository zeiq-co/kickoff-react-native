import { View, KeyboardAvoidingView, Platform } from 'react-native';
import Layout from '../components/global/Layout';

import LoginEmailForm from '../components/forms/LoginEmailForm';
import useUserStore from '../store/user';

const Login = () => {
  const { setIsLoggedIn } = useUserStore();

  return (
    <Layout>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <View className="flex-1 px-5">
          <LoginEmailForm handleSubmit={() => setIsLoggedIn(true)} />
        </View>
      </KeyboardAvoidingView>
    </Layout>
  );
};
export default Login;
