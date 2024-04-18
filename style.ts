import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  verticalFlex: {
    display: 'flex',
    flexDirection: 'column',
  },
  horizontalFlex: {
    display: 'flex',
    flexDirection: 'row',
  },
  centerFlex: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const universalColors = {
  permanentGeraniumLake: '#DF2B2B',
  americanGreen: '#37B744',
  lightSilver: '#D9D9D9',
  metallicYellow: '#FED815',
  primary: '#5964AB',
  textOnPrimary: '#FFFFFF',
};

export const darkColors = {
  background: '#2F2F2F',
  text: '#FFFFFF',
  textSecondary: '#FFFFFF',
  textButtonSecondary: '#FFFFFF',
};

export const lightColors = {
  background: '#FFFFFF',
  text: '#010000',
  textSecondary: '#73828A',
  textButtonSecondary: '#7A7A7A',
};
