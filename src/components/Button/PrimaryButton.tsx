import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { universalColors } from 'style';

type Props = React.ComponentProps<typeof Pressable> & {
  text: string;
  onPress: () => void;
};

const PrimaryButton = ({ text, onPress, ...passThroughProps }: Props) => (
  <Pressable
    {...passThroughProps}
    style={{ ...styles.button, backgroundColor: universalColors.primary }}
    onPress={onPress}
  >
    <Text style={{ ...styles.text, color: universalColors.textOnPrimary }}>
      {text}
    </Text>
  </Pressable>
);

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 291,
    height: 44,
    borderRadius: 10,
  },

  text: {
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
});
