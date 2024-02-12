import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { useTheme } from '@/hooks';

const InaccessibleStatusButton = () => {
  const { themedStyles } = useTheme();
  return (
    <View>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="#000">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM5.64645 5.64645C5.84171 5.45118 6.15829 5.45118 6.35355 5.64645L12 11.2929L17.6464 5.64646C17.8417 5.4512 18.1583 5.4512 18.3535 5.64646C18.5488 5.84172 18.5488 6.1583 18.3535 6.35357L12.7071 12L18.3535 17.6464C18.5488 17.8417 18.5488 18.1583 18.3535 18.3535C18.1583 18.5488 17.8417 18.5488 17.6464 18.3535L12 12.7071L6.35355 18.3536C6.15829 18.5488 5.84171 18.5488 5.64645 18.3536C5.45118 18.1583 5.45118 17.8417 5.64645 17.6464L11.2929 12L5.64645 6.35355C5.45118 6.15829 5.45118 5.84171 5.64645 5.64645Z"
          fill="#D9D9D9"
        />
      </Svg>

      <Text style={{ ...styles.text, color: themedStyles.buttonText }}>
        Inaccessible
      </Text>
    </View>
  );
};
export default InaccessibleStatusButton;
const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    paddingHorizontal: 30,
    paddingVertical: 4,
    position: 'absolute',
  },
});
