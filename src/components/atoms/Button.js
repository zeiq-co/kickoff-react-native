import { TouchableOpacity } from 'react-native';
import Text from './Text';

const MyButton = ({
  children,
  onPress,
  disabled,
  isLoading,
  // secondary,
  isSmall,
  fullWidth,
}) => {
  const classNames = ['bg-primary', 'rounded-lg', 'px-6', 'py-4', 'shadow-lg'];

  // if (secondary) classNames.push('font-bold');
  if (disabled || isLoading) classNames.push('opacity-70');
  if (isSmall) classNames.push('py-2');
  if (fullWidth) classNames.push('w-full');

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || isLoading}
      className={classNames.join(' ')}
    >
      <Text textLite bold size="medium" className="text-center">
        {isLoading ? 'Loading...' : children}
      </Text>
    </TouchableOpacity>
  );
};
export default MyButton;
