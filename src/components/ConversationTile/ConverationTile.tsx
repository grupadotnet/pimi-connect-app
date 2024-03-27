import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from 'style';

import { useTheme } from '@/hooks';

import Avatar from './Avatar';

type Props = React.ComponentProps<typeof Avatar> & {
  conversationTitle: string;
  lastMessage: string;
  lastMessageAuthor: string;
  messageRead: boolean;
};

const ConversationTile = ({
  conversationTitle,
  lastMessage,
  lastMessageAuthor,
  messageRead,
  ...passThroughProps
}: Props) => {
  const { themedStyles } = useTheme();

  return (
    <View style={styles.container}>
      <Avatar {...passThroughProps} />
      <View style={styles.contentContainer}>
        <Text style={{ ...styles.title, color: themedStyles.title }}>
          {conversationTitle}
        </Text>
        <Text
          style={{ ...styles.message, color: themedStyles.secondaryMessage }}
        >
          {lastMessageAuthor}:
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={messageRead ? null : { fontWeight: '600' }}
          >
            {lastMessage}
          </Text>
        </Text>
      </View>
      {messageRead && (
        <View
          style={{
            ...styles.unreadIcon,
            backgroundColor: themedStyles.primary,
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.horizontalFlex,
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 11,
    width: 290,
    height: 73,
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingLeft: 8,
  },
  contentContainer: {
    ...globalStyles.verticalFlex,
    gap: 4,
    width: 196,
    height: 42,
  },
  title: {
    fontSize: 12,
    fontWeight: '600',
  },
  message: {
    fontSize: 12,
  },
  unreadIcon: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});

export default ConversationTile;
