import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from 'style';

import { PrimaryButton } from '@/components/Button';
import { ConversationTile } from '@/components/ConversationTile';
import { TextInput } from '@/components/TextInput';
import { SwitchTheme } from '@/components/Theme';
import { getExample } from '@/controllers';
import { usePromise } from '@/hooks';
import { RootStackParamList } from '@/types/param';

type Props = NativeStackScreenProps<RootStackParamList, 'Components'>;

const Home = ({ navigation }: Props) => {
  const { t } = useTranslation('common');

  const [invoke, isLoading] = usePromise(getExample, (data) => {
    console.log(data);
  });

  console.log(isLoading);

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
      <PrimaryButton
        disabled={isLoading}
        text="pobierz dane"
        onPress={invoke}
      />
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
