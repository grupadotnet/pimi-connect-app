import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from 'style';

import { SwitchTheme } from '@/components';
import { PrimaryButton } from '@/components/Button';
import { Input } from '@/components/Input';
import { RootStackParamList } from '@/types/param';

type Props = NativeStackScreenProps<RootStackParamList, 'Components'>;

const Home = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>Components screen</Text>
      <Input
        label="Email"
        placeholder="Enter your email"
        onSubmit={(text) => console.log(text)}
      />
      <PrimaryButton
        title="Wróć do Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
      <SwitchTheme />
      <PrimaryButton title="primary button" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.verticalFlex,
    ...globalStyles.centerFlex,
  },
});

export default Home;
