import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface CustomInputProps {
  label: string;
  secureTextEntry?: boolean;
  onSubmit: (text: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  secureTextEntry,
  onSubmit,
}) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    onSubmit(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={text}
        secureTextEntry={secureTextEntry}
        onChangeText={setText}
        onSubmitEditing={handleSubmit}
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

export default CustomInput;
