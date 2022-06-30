import { useEffect } from 'react';
import { View } from 'react-native';
import { Text } from '../components/atoms';
import { timeout } from '../utils/helpers';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const init = async () => {
      const data = await timeout(1000);

      if (navigation && data !== null) {
        navigation.replace('App');
      }
    };

    init();
  }, []);
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-white">Loading...</Text>
    </View>
  );
};

export default SplashScreen;
