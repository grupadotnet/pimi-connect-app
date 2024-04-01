import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from 'style';

import { PrimaryButton } from '@/components/Button';
import { SwitchTheme } from '@/components/Theme';
import { RootStackParamList } from '@/types/param';

type Props = NativeStackScreenProps<RootStackParamList, 'Components'>;

const Home = ({ navigation }: Props) => {
  const { t } = useTranslation('common');

  return (
    <View style={styles.container}>
      <Text>{t('Hello')}</Text>
      <PrimaryButton
        text="Wróć do Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
      <SwitchTheme />
      <PrimaryButton text="primary button" onPress={() => {}} />
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
