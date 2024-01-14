import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { PrimaryButton, SwitchTheme } from '@/components';
import { ThemeProvider } from '@/hooks';

const App = () => {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
        <SwitchTheme />
        <PrimaryButton onPress={() => {}} title="dasdsa" />
      </View>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    color: 'red',
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
