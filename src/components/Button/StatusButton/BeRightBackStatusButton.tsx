import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { useTheme } from '@/hooks';

const BeRightBackStatusButton = () => {
  const { themedStyles } = useTheme();
  return (
    <View>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM11.5001 12.5588L11.5002 12.5686C11.4966 12.7072 11.5502 12.8465 11.6597 12.9482L16.0678 17.0428C16.2701 17.2307 16.5865 17.219 16.7744 17.0167C16.9624 16.8144 16.9507 16.498 16.7484 16.3101L12.5001 12.3639V3.5C12.5001 3.22386 12.2762 3 12.0001 3C11.7239 3 11.5001 3.22386 11.5001 3.5V12.5588Z"
          fill="#FED815"
        />
      </Svg>
      <Text style={{ ...styles.text, color: themedStyles.buttonText }}>
        Be Right Back
      </Text>
    </View>
  );
};
export default BeRightBackStatusButton;
const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    paddingHorizontal: 30,
    paddingVertical: 4,
    position: 'absolute',
  },
});
