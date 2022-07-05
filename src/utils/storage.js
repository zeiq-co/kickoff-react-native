import { MMKV } from 'react-native-mmkv';

// eslint-disable-next-line import/no-mutable-exports
let MmkvStroage;

if (process.env.NODE_ENV !== 'development') {
  MmkvStroage = new MMKV();
}

export default MmkvStroage;
