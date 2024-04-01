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
  doNotDisturb: '#DF2B2B',
  available: '#37B744',
  unavailable: '#D9D9D9',
  title: '#22282B',
  beRightBack: '#FED815',
};

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
