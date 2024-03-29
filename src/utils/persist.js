import AsyncStorage from '@react-native-async-storage/async-storage';
import { configurePersist } from 'zustand-persist';

const { persist, purge } = configurePersist({
  storage: AsyncStorage,
  rootKey: 'root',
});
export default persist;
export { purge };
