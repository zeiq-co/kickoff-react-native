import createStore from 'zustand';
import persist from '../utils/persist';

const useDeviceStore = createStore(
  persist(
    {
      key: 'device',
      allowlist: ['isOnline'],
    },
    (set) => ({
      isOnline: false,
      setIsOnline: async (val) => {
        set((state) => ({ isOnline: val }));
      },
    }),
  ),
);

export default useDeviceStore;
