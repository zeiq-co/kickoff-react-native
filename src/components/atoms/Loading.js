import { ActivityIndicator, View } from 'react-native';
import theme from '../../utils/theme';

const Loading = () => (
  <View className="flex-1 items-center justify-center z-100">
    <View className="bg-gray-400	 p-12 rounded shadow z-100">
      <ActivityIndicator size="large" color={theme.backgroundColor} />
    </View>
  </View>
);

export default Loading;
