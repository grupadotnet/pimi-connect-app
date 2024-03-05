import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { globalStyles } from 'style';

import { PrimaryButton } from '@/components/Button';
import { RootStackParamList } from '@/types/param';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <PrimaryButton
        title="Idź do Components Screen"
        onPress={() => navigation.navigate('Components')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.horizontalFlex,
    ...globalStyles.centerFlex,
  },
});

export default Home;
