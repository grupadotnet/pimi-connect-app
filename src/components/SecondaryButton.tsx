import { Pressable, StyleSheet, Text } from 'react-native';

interface buttonProps {
  onPress: any;
}

const SecondaryButton = (param: buttonProps) => {
  return (
    <Pressable onPress={param.onPress} style={styles.button}>
      <Text style={styles.text}>Anuluj</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 50,
    width: 279,
    height: 36,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    gap: 10,
    backgroundColor: '#FFFFFF',
  },
  text: {
    color: '#7A7A7A',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
  },
});

export default SecondaryButton;
