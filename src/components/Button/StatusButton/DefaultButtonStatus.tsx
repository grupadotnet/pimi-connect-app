import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

import { useTheme } from '@/hooks';

const DefaultButtonStatus = () => {
  const { themedStyles } = useTheme();
  return (
    <View>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Circle cx="12" cy="12" r="12" fill="#D9D9D9" />
      </Svg>
      <Text style={{ ...styles.text, color: themedStyles.buttonText }}>
        default
      </Text>
    </View>
  );
};
export default DefaultButtonStatus;
const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    paddingHorizontal: 30,
    paddingVertical: 4,
    position: 'absolute',
  },
});
