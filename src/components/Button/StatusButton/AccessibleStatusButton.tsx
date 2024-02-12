import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { useTheme } from '@/hooks';

const AccessibleStatusButton = () => {
  const { themedStyles } = useTheme();
  return (
    <View>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM19.6005 7.20247C19.8067 7.38614 19.825 7.70219 19.6413 7.9084L10.2774 18.4218C10.2612 18.44 10.244 18.4567 10.2259 18.4719C10.2144 18.4839 10.2022 18.4954 10.1893 18.5064C9.97928 18.6856 9.66369 18.6606 9.48444 18.4506L6.75481 15.2516C6.57557 15.0415 6.60055 14.7259 6.81062 14.5467C7.02068 14.3674 7.33627 14.3924 7.51552 14.6025L9.87603 17.3689L18.8946 7.2433C19.0782 7.03709 19.3943 7.01881 19.6005 7.20247Z"
          fill="#37B744"
        />
      </Svg>
      <Text style={{ ...styles.text, color: themedStyles.buttonText }}>
        Accesible
      </Text>
    </View>
  );
};
export default AccessibleStatusButton;
const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    paddingHorizontal: 30,
    paddingVertical: 4,
    position: 'absolute',
  },
});
