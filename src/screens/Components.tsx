import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from 'style';
import useSWR from 'swr';

import { PrimaryButton } from '@/components/Button';
import { ConversationTile } from '@/components/ConversationTile';
import { TextInput } from '@/components/TextInput';
import { SwitchTheme } from '@/components/Theme';
import { get } from '@/controllers';
import { RootStackParamList } from '@/types/param';

type Props = NativeStackScreenProps<RootStackParamList, 'Components'>;

const Home = ({ navigation }: Props) => {
  const { t } = useTranslation('common');

  const { data, isLoading, error } = useSWR('/Attachment/GetAllAsync', get({}));

  console.log(data, isLoading, error);

  return (
    <View style={styles.container}>
      <Text>Components screen</Text>
      <Text>{t('Hello')}</Text>
      <PrimaryButton
        text="Wróć do Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
      <PrimaryButton text="primary button" onPress={() => {}} />
      <TextInput
        label="Email"
        placeholder="Enter your email"
        onSubmit={(text) => console.log(text)}
      />
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
