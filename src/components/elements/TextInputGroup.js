import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import { Text } from '../atoms';

const TextInputGroup = ({ label, error, isLoading, width, ...props }) => (
  <View className="mb-3">
    {label && (
      <Text semiBold size="medium">
        {label}
      </Text>
    )}
    <TextInput
      className="border-b border-light px-3 text-base h-16"
      underlineColorAndroid="transparent"
      placeholderTextColor={'#9EA1A7'}
      editable={!isLoading}
      {...props}
    />
    {error && (
      <Text className="text-danger italic mt-2" size="extraSmall">
        {error}
      </Text>
    )}
  </View>
);

TextInputGroup.defaultProps = {
  isLoading: false,
};

TextInputGroup.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default TextInputGroup;
