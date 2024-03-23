import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type Props = React.ComponentProps<typeof Pressable> & {
  text: string;
  onPress: () => void;
};

const PrimaryButton = ({ text, onPress, ...passThroughProps }: Props) => {
  return (
    <Pressable {...passThroughProps} style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5964AB',
    width: 291,
    height: 44,
    borderRadius: 10,
  },

  text: {
    color: '#FFFFFF',
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
});
