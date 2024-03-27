import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from 'style';

import { SwitchTheme } from '@/components';
import { PrimaryButton } from '@/components/Button';
import { ConversationTile } from '@/components/ConversationTile';
import { RootStackParamList } from '@/types/param';

type Props = NativeStackScreenProps<RootStackParamList, 'Components'>;

const Home = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>Components screen</Text>
      <PrimaryButton
        title="Wróć do Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
      <SwitchTheme />
      <PrimaryButton title="primary button" onPress={() => {}} />
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
