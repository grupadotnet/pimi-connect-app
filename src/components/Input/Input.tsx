import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { useTheme } from '@/hooks';

type Props = React.ComponentPropsWithRef<typeof TextInput> & {
  label: string;
  secureTextEntry?: boolean;
  onSubmit: (text: string) => void;
};

const Input = ({ ...props }: Props) => {
  const { themedStyles } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.label, color: themedStyles.text }}>
        {props.label}
      </Text>
      <TextInput
        style={{
          ...styles.input,
          backgroundColor: themedStyles.inputBackground,
          color: themedStyles.text,
          borderColor: themedStyles.inputBorder,
        }}
        defaultValue=""
        secureTextEntry={props.secureTextEntry}
        onSubmitEditing={(value) => props.onSubmit(value.nativeEvent.text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: '',
  },
  input: {
    borderWidth: 2.3,
    borderRadius: 10,
    width: 300,
    height: 40,
    padding: 10,
    fontSize: 16,
  },
});

export default Input;
