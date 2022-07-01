import ExpoFastImage from 'expo-fast-image';

const Image = ({ src, cacheKey, width, height, borderRadius }) => (
  <ExpoFastImage
    uri={src} // image address
    cacheKey={cacheKey} // could be a unque id
    // any supported props by Image
    style={{ width, height, borderRadius: borderRadius || 0 }}
  />
);
export default Image;
