import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles, universalColors } from 'style';

import { useTheme } from '@/hooks';

import Avatar from './Avatar';

type Props = React.ComponentProps<typeof Avatar> & {
  conversationTitle: string;
  lastMessage: string;
  lastMessageAuthor: string;
  messageRead?: boolean;
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
        <Text style={{ ...styles.title, color: themedStyles.text }}>
          {conversationTitle}
        </Text>
        <View style={styles.lastMessageContainer}>
          <Text
            style={{
              ...styles.lastMessageAuthor,
              color: themedStyles.textSecondary,
            }}
          >
            {lastMessageAuthor}:
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              ...styles.lastMessage,
              color: themedStyles.textSecondary,
              fontWeight: messageRead ? '400' : '600',
            }}
          >
            {/* to create empty space between author and message */}
            {` ${lastMessage}`}
          </Text>
        </View>
      </View>
      {/* if message is not read, display icon */}
      {!messageRead && (
        <View
          style={{
            ...styles.unreadIcon,
            backgroundColor: universalColors.primary,
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
    width: '100%',
    height: 73,
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingLeft: 8,
  },
  contentContainer: {
    ...globalStyles.verticalFlex,
    gap: 4,
    flex: 1,
    height: 42,
  },
  title: {
    fontSize: 12,
    fontWeight: '600',
  },
  lastMessageContainer: {
    ...globalStyles.horizontalFlex,
  },
  lastMessageAuthor: {
    fontSize: 12,
  },
  lastMessage: {
    flex: 1,
    fontSize: 12,
  },
  unreadIcon: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});

export default ConversationTile;
