import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from 'style';

import { SwitchTheme } from '@/components';
import { PrimaryButton } from '@/components/Button';
import { RootStackParamList } from '@/types/param';

type Props = NativeStackScreenProps<RootStackParamList, 'Components'>;

const Home = ({ navigation }: Props) => {
  const { t } = useTranslation('common');

  return (
    <View style={styles.container}>
      <Text>{t('Hello')}</Text>
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
