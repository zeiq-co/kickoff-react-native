import { TouchableOpacity, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
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
  const [loading, setLoading] = useState(false);

  const classNames = [
    'bg-primary',
    'rounded-lg',
    'px-6',
    'py-4',
    'shadow-lg',
    'flex-row',
    'justify-center',
  ];

  // if (secondary) classNames.push('font-bold');
  if (disabled || loading) classNames.push('opacity-70');
  if (isSmall) classNames.push('py-2');
  if (fullWidth) classNames.push('w-full');

  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    }
    if (!isLoading) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [isLoading]);

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      className={classNames.join(' ')}
    >
      {loading === true && <ActivityIndicator color="white" className="mr-2" />}
      <Text textLite bold size="medium" className="text-center">
        {loading ? 'Loading...' : children}
      </Text>
    </TouchableOpacity>
  );
};
export default MyButton;
