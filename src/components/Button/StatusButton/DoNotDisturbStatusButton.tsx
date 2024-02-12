import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

import { useTheme } from '@/hooks';

const DoNotDisturbStatusButton = () => {
  const { themedStyles } = useTheme();
  return (
    <View>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Circle cx="12" cy="12" r="12" fill="#DF2B2B" />
      </Svg>

      <Text style={{ ...styles.text, color: themedStyles.buttonText }}>
        Do not Disturb
      </Text>
    </View>
  );
};
export default DoNotDisturbStatusButton;
const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    paddingHorizontal: 30,
    paddingVertical: 4,
    position: 'absolute',
  },
});
