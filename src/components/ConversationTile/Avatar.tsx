import React from 'react';
import { Image, ImageProps, StyleSheet, View } from 'react-native';

import { Status } from '@/types/status';
import { mapStatusToColor } from '@/utils';

type Props = {
  image: ImageProps;
  conversationStatus: Status;
};

const Avatar = ({ image, conversationStatus }: Props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} {...image} />
      <View
        style={{
          ...styles.status,
          backgroundColor: mapStatusToColor(conversationStatus),
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 51,
    height: 51,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 51 / 2,
  },
  status: {
    width: 11,
    height: 11,
    borderRadius: 11 / 2,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

export default Avatar;
