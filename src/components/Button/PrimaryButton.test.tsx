import { fireEvent, render, screen } from '@testing-library/react-native';

import { ThemeProvider } from '@/hooks';

import PrimaryButton from './PrimaryButton';

const onPress = jest.fn();

describe('PrimaryButton component tests', () => {
  it('properly renders button with provided text', () => {
    render(
      <ThemeProvider>
        <PrimaryButton text="test" onPress={onPress} />
      </ThemeProvider>,
    );

    expect(screen.getByText('test')).toBeDefined();
  });
  it('calls provieded onPress method', () => {
    render(<PrimaryButton text="test" onPress={onPress} />);

    fireEvent(screen.getByText('test'), 'press');

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
