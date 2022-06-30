import PropTypes from 'prop-types';

import { View } from 'react-native';
import { Text, Icon } from '../atoms';

const EmptyState = ({ icon, title, details }) => (
  <View className="flex-1 justify-center  items-center">
    <View className="bg-green-400 p-5 w-9/12 rounded-lg shadow-lg">
      <Icon
        name={icon}
        size={54}
        className="text-yellow-300 mb-1 text-center "
      />
      <Text bold size="medium" className="text-center">
        {title}
      </Text>
      <Text>{details}</Text>
    </View>
  </View>
);

EmptyState.defaultProps = {
  icon: 'warning',
  title: 'No data available',
  details: '',
};

EmptyState.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  details: PropTypes.string,
};

export default EmptyState;
