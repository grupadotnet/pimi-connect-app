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
  buttonBackground: 'blue',
  buttonText: 'white',
  buttonActive: '#E4E4E4',
};

export const lightColors = {
  primary: 'green',
  buttonBackground: 'white',
  buttonText: 'black',
  buttonActive: '#E4E4E4',
};
