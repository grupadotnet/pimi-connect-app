import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from 'style';

import { PrimaryButton, SecondaryButton } from '@/components/Button';
import { ConversationTile } from '@/components/ConversationTile';
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
      <PrimaryButton text="primary button" onPress={() => {}} />
      <SwitchTheme />
      <ConversationTile
        image={{
          source: {
            uri: 'https://images.pexels.com/photos/11073147/pexels-photo-11073147.jpeg?cs=srgb&dl=pexels-merve-t%C3%BClek-11073147.jpg&fm=jpg',
          },
        }}
        conversationStatus="available"
        conversationTitle="Marek Kowalski"
        lastMessage="lorem ipsum lorem ipsum lorem ipsum lorem ipsum. lorem ipsum"
        lastMessageAuthor="Marek Kowalski"
        messageRead
      />
      <ConversationTile
        image={{
          source: {
            uri: 'https://images.pexels.com/photos/11073147/pexels-photo-11073147.jpeg?cs=srgb&dl=pexels-merve-t%C3%BClek-11073147.jpg&fm=jpg',
          },
        }}
        conversationStatus="be right back"
        conversationTitle="Marek Kowalski"
        lastMessage="lorem ipsum lorem ipsum lorem ipsum lorem ipsum. lorem ipsum"
        lastMessageAuthor="Marek Kowalski"
      />
      <PrimaryButton text="primary button" onPress={() => {}} />
      <SecondaryButton text="secondary button" onPress={() => {}} />
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
