import { fireEvent, render, screen } from '@testing-library/react-native';

import PrimaryButton from './PrimaryButton';

const onPress = jest.fn();

describe('PrimaryButton component tests', () => {
  it('properly renders button with provided text', () => {
    render(<PrimaryButton text="test" onPress={onPress} />);

    expect(screen.getByText('test')).toBeDefined();
  });
  it('calls provieded onPress method', () => {
    render(<PrimaryButton text="test" onPress={onPress} />);

    fireEvent(screen.getByText('test'), 'press');

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
