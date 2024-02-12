import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { SwitchTheme } from '@/components';
import { PrimaryButton, StatusButton } from '@/components/Button';
import { ThemeProvider } from '@/hooks';

const App = () => {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
        <SwitchTheme />
        <PrimaryButton onPress={() => {}} title="dasdsa" />
        <StatusButton onPress={() => {}} status="Inaccessible" />
        <StatusButton onPress={() => {}} status="Accessible" />
        <StatusButton onPress={() => {}} status="DoNotDisturb" />
        <StatusButton onPress={() => {}} status="BeRightBack" />
        <StatusButton onPress={() => {}} status="other" />
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
