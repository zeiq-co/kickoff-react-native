import PropTypes from 'prop-types';
import { Text } from 'react-native';

const MyText = (props) => {
  const {
    children,
    light,
    textLite,
    textGray,
    semiBold,
    bold,
    size,
    ...other
  } = props;

  const classNames = [];

  if (textLite) {
    classNames.push('text-slate-50');
  } else if (textGray) {
    classNames.push('text-grayLight');
  } else {
    classNames.push('text-secondary');
  }

  if (light) {
    classNames.push('font-light');
  } else if (semiBold) {
    classNames.push('font-semibold');
  } else if (bold) {
    classNames.push('font-bold');
  } else {
    classNames.push('font-normal');
  }

  if (size === 'medium') {
    classNames.push('text-lg');
  } else if (size === 'large') {
    classNames.push('text-2xl');
  } else if (size === 'small') {
    classNames.push('text-sm');
  } else if (size === 'extraSmall') {
    classNames.push('text-xs');
  } else if (size === 'extraLarge') {
    classNames.push('text-3xl');
  }

  if (!children) {
    return null;
  }

  return (
    <Text allowFontScaling={false} {...other} className={classNames.join(' ')}>
      {children}
    </Text>
  );
};

MyText.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  primary: PropTypes.bool,
  light: PropTypes.bool,
  semiBold: PropTypes.bool,
  bold: PropTypes.bool,
  extraBold: PropTypes.bool,
  children: PropTypes.node,
  size: PropTypes.string,
};

export default MyText;
