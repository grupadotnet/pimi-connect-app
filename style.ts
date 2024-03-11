import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  verticalFlex: {
    display: 'flex',
    flexDirection: 'column',
  },
  horizontalFlex: {
    display: 'flex',
  },
  centerFlex: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const darkColors = {
  primary: 'blue',
  inputBackground: '#2d2d2d',
  text: 'white',
  inputBorder: '#c7c4d6',
};

export const lightColors = {
  primary: 'green',
  inputBackground: '#f0f0f0',
  Text: 'black',
  inputBorder: '#c7c4d6',
};
