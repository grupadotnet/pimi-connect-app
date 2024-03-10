import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

type Props = React.ComponentPropsWithRef<typeof TextInput> & {
  label: string;
  secureTextEntry?: boolean;
  onSubmit: (text: string) => void;
};

const Input = ({ ...props }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={styles.input}
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
    borderWidth: 1,
    borderColor: '#c7c4d6',
    borderRadius: 10,
    width: 300,
    height: 40,
    padding: 10,
    fontSize: 16,
  },
});

export default Input;
