import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput as ReactTextInput,
  View,
} from 'react-native';

import { useTheme } from '@/hooks';

type Props = React.ComponentPropsWithRef<typeof ReactTextInput> & {
  label: string;
  secureTextEntry?: boolean;
  onSubmit: (text: string) => void;
};

const TextInput = ({ label, secureTextEntry, onSubmit }: Props) => {
  const { themedStyles } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.label, color: themedStyles.text }}>{label}</Text>
      <ReactTextInput
        style={{
          ...styles.input,
          backgroundColor: themedStyles.inputBackground,
          color: themedStyles.text,
          borderColor: themedStyles.inputBorder,
        }}
        secureTextEntry={secureTextEntry}
        onSubmitEditing={(value) => onSubmit(value.nativeEvent.text)}
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

export default TextInput;
