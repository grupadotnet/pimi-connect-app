import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { universalColors } from 'style';

import { useTheme } from '@/hooks';

type Props = React.ComponentProps<typeof Pressable> & {
  text: string;
  onPress: () => void;
};

const SecondaryButton = ({ text, onPress, ...passThroughProps }: Props) => {
  const { themedStyles, theme } = useTheme();

  return (
    <Pressable
      {...passThroughProps}
      style={{
        ...styles.button,
        borderWidth: 1,
        backgroundColor: themedStyles.background,
        borderColor:
          theme === 'light' ? universalColors.lightSilver : undefined,
      }}
      onPress={onPress}
    >
      <Text style={{ ...styles.text, color: themedStyles.textButtonSecondary }}>
        {text}
      </Text>
    </Pressable>
  );
};

export default SecondaryButton;

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
