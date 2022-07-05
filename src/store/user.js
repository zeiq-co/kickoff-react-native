import createStore from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persist from '../utils/persist';

import MmkvStroage from '../utils/storage';

const useUserStore = createStore(
  persist(
    {
      key: 'user',
      allowlist: ['isLoggedIn', 'user'],
    },
    (set) => ({
      isLoggedIn: false,
      user: {},
      setIsLoggedIn: (val) =>
        set(() => ({
          isLoggedIn: val,
        })),

      logout: async (val) => {
        try {
          set(() => ({
            isLoggedIn: false,
          }));
          if (process.env.NODE_ENV === 'development') {
            AsyncStorage.flushGetRequests();
            await AsyncStorage.clear();
          } else {
            MmkvStroage.clearAll();
          }
          // await auth().signOut();
        } catch (e) {
          console.log('logout error', e);
        }
      },

      setUser: (val) =>
        set(() => ({
          user: val,
        })),
    }),
  ),
);

export default useUserStore;
