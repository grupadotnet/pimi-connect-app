import { fireEvent, screen } from '@testing-library/react-native';

import { SecondaryButton } from '@/components/Button';
import renderWithTheme from '@/tests/renderWithTheme';

const onPress = jest.fn();

describe('SecondaryButton component tests', () => {
  it('properly renders button with provided text', () => {
    renderWithTheme(<SecondaryButton text="test" onPress={onPress} />);

    expect(screen.getByText('test')).toBeDefined();
  });
  it('calls provieded onPress method', () => {
    renderWithTheme(<SecondaryButton text="test" onPress={onPress} />);

    fireEvent(screen.getByText('test'), 'press');

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
