import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
// import { styled } from 'tailwindcss-react-native';
import { TailwindProvider } from 'tailwindcss-react-native';

// const StyledText = styled(Text)`
//   color: '#848487';
// `;

export default function App() {
  return (
    <TailwindProvider>
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-bold">
          Open up App.js to start working on your App!
        </Text>
        <StatusBar style="auto" />
      </View>
    </TailwindProvider>
  );
}
