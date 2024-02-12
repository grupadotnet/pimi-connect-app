import React from 'react';
import { GestureResponderEvent, Pressable, StyleSheet } from 'react-native';

import { selectStatus, useTheme } from '@/hooks';
import { Status } from '@/types/status';

type Props = React.ComponentPropsWithRef<typeof Pressable> & {
  status: Status;
  onPress: (event: GestureResponderEvent) => void;
};

const StatusButton = (param: Props) => {
  const { themedStyles } = useTheme();
  const actualStatus: Status = 'Inaccessible'; //added temporarily until the selected status is supported
  const buttonStatus: Status = param.status;

  return (
    <Pressable
      style={[
        styles.button,
        actualStatus === param.status
          ? { backgroundColor: themedStyles.buttonActive }
          : { backgroundColor: themedStyles.buttonBackground },
      ]}
    >
      {selectStatus(buttonStatus)}
    </Pressable>
  );
};
export default StatusButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    width: 232,
    height: 44,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
    // to improve the shade
  },
});
