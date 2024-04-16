import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const SearchBar = () => {
  return <TextInput style={styles.input} />;
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'red',
  },
});

export default SearchBar;
