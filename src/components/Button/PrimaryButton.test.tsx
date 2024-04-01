import { fireEvent, screen } from '@testing-library/react-native';

import { PrimaryButton } from '@/components/Button';
import renderWithTheme from '@/tests/renderWithTheme';

const onPress = jest.fn();

describe('PrimaryButton component tests', () => {
  it('properly renders button with provided text', () => {
    renderWithTheme(<PrimaryButton text="test" onPress={onPress} />);

    expect(screen.getByText('test')).toBeDefined();
  });
  it('calls provieded onPress method', () => {
    renderWithTheme(<PrimaryButton text="test" onPress={onPress} />);

    fireEvent(screen.getByText('test'), 'press');

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
