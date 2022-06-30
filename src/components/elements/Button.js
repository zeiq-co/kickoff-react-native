import { TouchableOpacity, Text } from 'react-native';

const MyButton = ({
  children,
  onPress,
  disabled,
  isLoading,
  secondary,
  small,
  fullWidth,
}) => {
  const classNames = ['bg-primary', 'rounded-lg', 'px-4', 'py-4'];

  if (secondary) classNames.push('font-bold');
  if (disabled || isLoading) classNames.push('opacity-70');
  if (small) classNames.push('py-2');
  if (fullWidth) classNames.push('w-full');

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || isLoading}
      className={classNames.join(' ')}
    >
      <Text className="font-bold text-white text-center">
        {isLoading ? 'Loading...' : children}
      </Text>
    </TouchableOpacity>
  );
};
export default MyButton;
