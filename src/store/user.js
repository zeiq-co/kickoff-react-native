import createStore from 'zustand';
import persist from '../utils/persist';

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
      setUser: (val) =>
        set(() => ({
          user: val,
        })),
    }),
  ),
);

export default useUserStore;
