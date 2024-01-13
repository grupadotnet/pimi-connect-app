import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import StatusButton from './src/components/StatusButton';
import { globalStyles } from './style';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <StatusButton title="Niedostępny" status={0} onPress={() => {}} />
      <StatusButton title="Dostępny" status={1} onPress={() => {}} />
      <StatusButton title="Nie przeszkadzać" status={2} onPress={() => {}} />
      <StatusButton title="Zaraz wracam" status={3} onPress={() => {}} />
      <StatusButton title="default" status={4} onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.horizontalFlex,
    ...globalStyles.centerFlex,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
