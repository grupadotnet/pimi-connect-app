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
  button: '#5964AB',
  buttonText: '#FFF',
  buttonActive: '#1F1F1F',
  background: '#2F2F2F',
  text: '#FFF',
};

export const lightColors = {
  button: '#5964AB',
  buttonText: '#FFF',
  stroke: '#BDC1DD',
  icon: '#A7AAC0',
  iconBackground: '#EDEEF4',
  buttonSettings: '#F5F5F5',
  buttonSettingsActive: '#E4E4E4',
  text: '#000',
};
