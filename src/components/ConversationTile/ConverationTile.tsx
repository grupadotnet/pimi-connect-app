import React from 'react';
import { View } from 'react-native';

import { Status } from '@/types/status';

type Props = {
  conversationTitle: string;
  lastMessage: string;
  lastMessageAuthor: string;
  image: string;
  status: Status;
};

const ConversationTile = (props: Props) => {
  return <View></View>;
};

export default ConversationTile;
