import { Platform } from 'react-native';

const theme = {
  brandColor: '#312b46',
  primaryColor: '#663ff5',
  secondaryColor: '#663ff5',
  borderColor: '#d8d8d9',
  backgroundColor: '#FFFFFF',
  textColor: '#1e0f2f',
  textColorLite: '#c3c2c4',
  dangerColor: '#FF8181',
  fontFamily: 'Raleway',
  fontSizeExtraSmall: 12,
  fontSizeSmall: 14,
  fontSize: 16,
  fontSizeMedium: 18,
  fontSizeLarge: 28,
  fontSizeExtraLarge: 32,
  shadowColor: '#DEDEDE',
  shadowOffset: { width: 1, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 1,
};

export default theme;

export const boxShadow = Platform.select({
  ios: {
    shadowColor: theme.shadowColor,
    shadowOffset: theme.shadowOffset,
    shadowOpacity: theme.shadowOpacity,
    shadowRadius: theme.shadowRadius,
  },
  android: {
    elevation: 2,
  },
});
