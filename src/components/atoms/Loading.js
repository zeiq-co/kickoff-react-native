import { ActivityIndicator, View } from 'react-native';
import theme from '../../utils/theme';

const Loading = () => (
  <View className="bg-[#00000090] absolute -top-10 right-0 left-0 -bottom-5 items-center justify-center z-100">
    <ActivityIndicator size="large" color={theme.primaryColor} />
  </View>
);

export default Loading;
