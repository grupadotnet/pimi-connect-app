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
  primary: 'blue',
  secondaryMessage: '#73828A',
};

export const lightColors = {
  primary: 'green',
  title: '#22282B',
  secondaryMessage: '#73828A',
};
