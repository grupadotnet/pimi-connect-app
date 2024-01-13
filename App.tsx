import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimaryButton from './src/components/PrimaryButton';
import StatusButton from '@/components/StatusButton';
import { globalStyles } from 'style';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <StatusButton title="Niedostępny" status='Inaccessible'></StatusButton>
      <StatusButton title="Dostępny" status='Accessible'></StatusButton>
      <StatusButton title="Nie przeszkadzać" status='DoNotDisturb'></StatusButton>
      <StatusButton title="Zaraz wracam" status='BeRightBack'></StatusButton>
      <StatusButton title="default" status='default'></StatusButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
<<<<<<< HEAD
    flex: 1,
=======
    ...globalStyles.horizontalFlex,
    ...globalStyles.centerFlex,
>>>>>>> 832ebd9a2b3bc99bca6e08195d98fc76755064ea
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
